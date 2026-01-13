import { useState } from 'react';

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  return (
    <div className='flex flex-col gap-6'>
      <h2>Progress Bar Component</h2>
      <div className='bg-gray-950 p-3 w-80 flex flex-col items-center justify-center gap-2 h-28'>
        <div className='w-11/12 flex flex-col items-start justify-center h-4 rounded-full bg-green-500'>
          <span
            style={{ width: `${progress}%` }}
            className='h-4 z-50 duration-1000 ease-in transform bg-blue-500 text-vsm rounded-full flex flex-row items-end justify-end pr-2 text-white font-bold'
          >
            {progress}
          </span>
        </div>
        <div className='w-full flex flex-col items-center justify-center text-white gap-1'>
          <h2>Enter progress in percentage</h2>
          <input
            type='number'
            max={100}
            value={progress > 100 ? 100 : progress}
            onChange={(e) => setProgress(e.target.value)}
            className='outline-gray-100 w-20 pl-5 text-white font-bold outline-1 rounded-[0.4em]'
          />
        </div>
      </div>
    </div>
  );
}
export default ProgressBar;
