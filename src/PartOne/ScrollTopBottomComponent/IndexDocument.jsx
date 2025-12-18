import { useRef } from 'react';
import useFetch from '../CustomHooks/UseFetch/useFetch';

function ScrollToTopBottomComponentDocument() {
  const { data, pending } = useFetch(
    'https://dummyjson.com/products?limit=200',
    {}
  );
  const containerRef = useRef();

  const handleScrollToBottom = () => {
    document.documentElement.scrollTo({
      top: document.documentElement.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  function handleScrollToTop() {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className='w-full  gap-4 items-center flex-col flex'>
      <h2 className='underline select-none'>Scroll To Top/Bottom Component</h2>
      <h2 className='text-vsm'>scrolling within the Document</h2>
      <button
        onClick={handleScrollToBottom}
        className=' bg-sky-400 rounded-[0.3em] px-1 py-0.5 '
      >
        Scroll To bottom
      </button>
      <span
        ref={containerRef}
        className=' pt-3 custom-scrollbar rounded-[0.3em] text-white items-center bg-gray-900 flex w-1/3 flex-col pb-5 transform duration-500 ease-out overflow-y-auto gap-2'
      >
        {pending ? (
          <h2 className='loaderThree'></h2>
        ) : data && data?.products && data.products.length ? (
          data.products.map((item) => (
            <h2 className='text-vsm' key={item.id}>
              {item.title}
            </h2>
          ))
        ) : null}
      </span>
      <button
        onClick={handleScrollToTop}
        className=' bg-sky-400 rounded-[0.3em] px-1 py-0.5 '
      >
        Scroll To Top
      </button>
    </div>
  );
}

export default ScrollToTopBottomComponentDocument;
