import { useEffect, useRef, useState } from 'react';

function CountDownTimer({ initialTime, onTimeFinish }) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef();

  function handlePauseAndResume() {
    setIsRunning((prevIsRunning) => !isRunning);
  }
  function handleReset() {
    clearInterval(intervalRef.current);
    setTime(initialTime);
    setIsRunning(false);
  }
  function handleStart() {
    setIsRunning(true);
  }

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            if (onTimeFinish) {
              onTimeFinish();
            }
            return 0;
          }

          return prevTime - 1;
        });
      }, 700);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning, onTimeFinish]);

  const mins = Math.floor(time / 60);
  const secs = time % 60;
  return (
    <div className='flex flex-col items-center justify-center gap-1'>
      <h2 className='text-2xl text-blue-600'>Timer</h2>
      <p className='text-xl  font-semibold'>
        {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
      </p>

      <div className='flex flex-row gap-3'>
        <button
          onClick={handlePauseAndResume}
          className='bg-blue-500 text-white px-3'
        >
          {isRunning ? 'Pause' : 'Resume'}
        </button>
        <button onClick={handleReset} className='bg-blue-500 text-white px-3'>
          Reset
        </button>
        <button onClick={handleStart} className='bg-blue-500 text-white px-3'>
          Start
        </button>
      </div>
    </div>
  );
}
export default CountDownTimer;
