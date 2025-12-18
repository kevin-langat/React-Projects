import { useRef, useState } from 'react';
import useOutSideClickHook from './UseOutSideHook';

function UseOnclickOutside() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef(false);

  useOutSideClickHook(ref, () => setShowContent(false));

  return (
    <div className='w-full h-125  gap-4 items-center flex-col flex'>
      <h2 className='underline select-none'>Custom Hooks</h2>
      <h2 className='underline select-none'>Use Outside Click Hook</h2>
      {showContent ? (
        <span
          ref={ref}
          className=' pt-3 custom-scrollbar rounded-[0.3em] text-white items-center bg-gray-900 flex w-1/3 flex-col pb-5 transform duration-500 ease-out overflow-y-auto gap-2'
        >
          <h2>This is the content</h2>
          <h2>Click Outside to close</h2>
        </span>
      ) : (
        <button
          onClick={() => setShowContent(true)}
          className='bg-sky-400 px-3 py-1 rounded-[0.2em] '
        >
          Show Content
        </button>
      )}
    </div>
  );
}

export default UseOnclickOutside;
