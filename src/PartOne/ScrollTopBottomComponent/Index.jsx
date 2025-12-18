import { useRef } from 'react';
import useFetch from '../CustomHooks/UseFetch/useFetch';
import { useNavigate } from 'react-router-dom';

function ScrollToTopBottomComponent() {
  const { data, pending } = useFetch(
    'https://dummyjson.com/products?limit=200',
    {}
  );
  const containerRef = useRef();
  const navigateTo = useNavigate();

  const handleScrollToBottom = () => {
    containerRef.current.scrollTo({
      top: containerRef.current.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  function handleScrollToTop() {
    containerRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className='w-full h-125  gap-4 items-center flex-col flex'>
      <h2 className='underline select-none'>Scroll To Top/Bottom Component</h2>
      <h2 className='text-vsm'>scrolling within the container</h2>
      <span
        ref={containerRef}
        className=' pt-3 custom-scrollbar rounded-[0.3em] text-white items-center bg-gray-900 flex w-1/3 flex-col pb-5 transform duration-500 ease-out overflow-y-auto gap-2'
      >
        <button
          onClick={handleScrollToBottom}
          className=' bg-sky-400 rounded-[0.3em] px-1 py-0.5 '
        >
          Scroll To bottom
        </button>
        {pending ? (
          <h2 className='loaderThree'></h2>
        ) : data && data?.products && data.products.length ? (
          data.products.map((item) => <h2 key={item.id}>{item.title}</h2>)
        ) : null}
        <button
          onClick={handleScrollToTop}
          className=' bg-sky-400 rounded-[0.3em] px-1 py-0.5 '
        >
          Scroll To Top
        </button>
      </span>
    </div>
  );
}

export default ScrollToTopBottomComponent;
