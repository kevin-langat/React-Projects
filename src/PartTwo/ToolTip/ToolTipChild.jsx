import { useState } from 'react';

function ToolTipChild({ delay, children, header }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className=' flex flex-col items-center justify-center gap-4'>
      <h2
        className='bg-gray-950 cursor-pointer text-white rounded-[0.3em] px-3 py-1'
        onMouseLeave={() => {
          setTimeout(() => {
            setIsVisible(false);
          }, delay);
        }}
        onMouseEnter={() => {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }}
      >
        {header}
      </h2>
      {isVisible && (
        <div className='w-40 text-vsm transform duration-500 ease-out h-10 text-white px-0.5 bg-gray-950 rounded-[0.3em]'>
          {children}
        </div>
      )}
    </div>
  );
}
export default ToolTipChild;
