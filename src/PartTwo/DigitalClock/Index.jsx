import { useEffect, useState } from 'react';
import CountDownTimer from './CountDownTimer';

function DigitalClock() {
  const [currentDate, setCurrentDate] = useState(new Date());

  function handleOnTimeFinish() {}

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
  }, []);

  // timer
  return (
    <div className='flex flex-col items-center gap-3'>
      <h2>Digital Clock</h2>
      <div className='bg-gray-950 w-50 items-center justify-center text-green-500 font-bold rounded-2xl h-15 flex flex-col '>
        <h2>
          {currentDate.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: '2-digit',
            hour12: true,
          })}
        </h2>

        <h2>
          {currentDate.toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}
        </h2>
      </div>

      <CountDownTimer initialTime={120} onTimeFinish={handleOnTimeFinish} />
    </div>
  );
}
export default DigitalClock;
