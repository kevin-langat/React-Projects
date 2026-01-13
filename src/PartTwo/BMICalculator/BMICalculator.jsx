import { useState } from 'react';

function BMICalculator() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [err, setErr] = useState();

  function calculateBMI() {
    if (!weight) {
      return setErr('Enter the weight to calculate');
    }
    if (!height) {
      return setErr('Enter the height to calculate');
    }
    const numericWeight = parseFloat(weight);
    const numericHeight = parseFloat(height);
    if (
      isNaN(numericWeight) ||
      isNaN(numericHeight) ||
      numericHeight <= 0 ||
      numericWeight <= 0
    ) {
      setErr('Please enter a valid value for both height and weight');
      return;
    }
    const calculateHeightInMeters = numericHeight / 100;
    setBmi(
      (weight / (calculateHeightInMeters * calculateHeightInMeters)).toFixed(2)
    );
    setErr('');
  }
  return (
    <div className='flex flex-col items-center'>
      <h2>BMI Calculator</h2>

      <div className='bg-gray-950 p-3 w-80 flex flex-col items-center justify-center gap-2 h-40'>
        <div className='w-full flex flex-col items-center justify-center text-white gap-0.5'>
          <h2>Enter the height</h2>
          <input
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            type='number'
            max={100}
            className='outline-gray-100 pl-5 text-white font-bold outline-1 rounded-[0.4em]'
          />
        </div>
        <div className='w-full flex flex-col items-center justify-center text-white gap-0.5'>
          <h2>Enter the weight</h2>
          <input
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            type='number'
            max={100}
            className='outline-gray-100 pl-5 text-white font-bold outline-1 rounded-[0.4em]'
          />
        </div>
        <button
          onClick={calculateBMI}
          className='text-white bg-blue-600 px-3 py-0.5 rounded-[0.2em]'
        >
          Calculate BMI{' '}
        </button>
      </div>
      {err ? <h2 className='text-sm'>{err}</h2> : <h2>You BMI is:{bmi}</h2>}
      {err === '' ? (
        <p>
          {bmi < 18.5
            ? 'Underweight'
            : bmi >= 18.5 && bmi < 24.9
            ? 'Normal Weight'
            : bmi >= 25 && bmi < 29.9
            ? 'Overweight'
            : 'Obese'}
        </p>
      ) : null}
    </div>
  );
}
export default BMICalculator;
