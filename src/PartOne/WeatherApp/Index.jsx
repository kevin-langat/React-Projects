import { Cloud, Gauge, Moon, Sun, Thermometer, Wind } from 'lucide-react';
import { useEffect, useState } from 'react';

function WeatherAppComponent() {
  const [input, setInput] = useState('Nairobi');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [geolocation, setGeolocation] = useState({
    lat: null,
    long: null,
  });
  const [formattedTime, setFormattedTime] = useState(null);

  async function fetchWeatherData(lat = -1.25, long = 36.875) {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,rain,showers,snowfall,cloud_cover,pressure_msl,surface_pressure,temperature_2m&timezone=auto`
      );
      const data = await response.json();
      setLoading(false);
      if (data) {
        setWeatherData(data);
        setFormattedTime(
          new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            weekday: 'long',
            month: 'long',
            year: 'numeric',
            timeZone: data?.timezone,
          }).format(new Date(data?.current.time))
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchGeolocationData() {
    if (input.trim() === '') {
      setError(true);
      return;
    }
    try {
      setLoading(true);

      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${input.toLowerCase()}&count=10&language=en&format=json`
      );
      const data = await response.json();

      if (data && data.results && data.results.length) {
        fetchWeatherData(
          data?.results[0]?.latitude,
          data?.results[0]?.longitude
        );
      }
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div className='w-full relative gap-4 items-center flex-col flex'>
      <h2 className='underline select-none'>Weather Component</h2>
      <input
        type='text'
        className={`${
          error
            ? 'outline-red-500 placeholder:text-red-500'
            : 'outline-gray-500'
        } outline-1 focus:outline-gray-500 focus:placeholder:text-gray-300 min-w-40 field-sizing-content caret-sky-400 outline-gray-500 rounded-[0.3em] bg-gray-200 italic text-vsm placeholder:text-nlsm placeholder:italic py-0.5 pl-4`}
        placeholder='Search for a city'
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onFocus={() => {
          input !== '' ? setInput('') : null;
        }}
        onBlur={(e) => {
          e.target.value.trim() !== '' ? setError(false) : setError(true);
        }}
      />

      <button
        onClick={fetchGeolocationData}
        className=' bg-indigo-400 px-3 text-gray-300 rounded-[0.3em] text-nsm py-0.5 '
      >
        Search A City
      </button>

      <div className=' pt-3 custom-scrollbar rounded-[0.3em] text-white items-center bg-gray-900 flex w-1/2 flex-col p-5 overflow-y-auto gap-4'>
        {loading ? (
          <h2 className='loaderThree'></h2>
        ) : weatherData ? (
          <div className='flex gap-4 flex-col items-center justify-around w-11/12 h-11/12'>
            <div className='flex gap-2 items-center justify-center flex-row gap2'>
              <h2 className='text-green-400 text-[1.3em]  font-bold'>{`${
                weatherData.timezone.split('/')[1]
              },  ${weatherData.timezone.split('/')[0]}`}</h2>
              {weatherData.current.is_day === 1 ? (
                <Sun className='stroke-orange-400' />
              ) : (
                <Moon className='stroke-gray-400' />
              )}
            </div>
            <h2 className='italic text-vsm'>{formattedTime}</h2>

            <div className='grid grid-cols-2 gap-4'>
              <div className='flex gap-4 flex-row'>
                <Thermometer
                  className={`${
                    weatherData.current.temperature_2m < 30
                      ? 'stroke-sky-300'
                      : 'stroke-red-500'
                  }`}
                />
                <h2
                  className={`${
                    weatherData.current.temperature_2m < 30
                      ? 'text-sky-300'
                      : 'text-red-500'
                  }`}
                >
                  {' '}
                  {weatherData.current.temperature_2m}{' '}
                  {weatherData.current_units.temperature_2m}
                </h2>
              </div>
              <div className='flex gap-4 flex-row'>
                <Cloud
                  className={`${
                    weatherData.current.cloud_cover < 40
                      ? 'stroke-gray-600'
                      : 'stroke-gray-400 fill-gray-400'
                  }`}
                />
                <h2
                  className={`${
                    weatherData.current.cloud_cover < 30
                      ? 'text-gray-300'
                      : 'text-gray-400'
                  }`}
                >
                  {' '}
                  {weatherData.current.cloud_cover}{' '}
                  {weatherData.current_units.cloud_cover}
                </h2>
              </div>
              <div className='flex gap-4 flex-row'>
                <Gauge className='stroke-fuchsia-500' />
                <h2>
                  {weatherData.current.pressure_msl}{' '}
                  {weatherData.current_units.pressure_msl}
                </h2>
              </div>
              <div className='flex gap-4 flex-row'>
                <Wind className='stroke-yellow-500' />
                <h2>
                  {weatherData.current.wind_speed_10m}{' '}
                  {weatherData.current_units.wind_speed_10m}
                </h2>
              </div>
            </div>
          </div>
        ) : (
          <h2>No data</h2>
        )}
      </div>
    </div>
  );
}
export default WeatherAppComponent;
