import { useEffect, useState } from 'react';

function ScrollIndicator() {
  const [data, setData] = useState([]);
  const [breakScrollH, setBreakScrollH] = useState(0);
  const [elmentScrollPercentage, setElmentScrollPercentage] = useState(0);

  async function fetchData() {
    const response = await fetch('https://dummyjson.com/products?limit=190', {
      method: 'GET',
    });
    const result = await response.json();
    if (result && result.products.length) setData(result.products);
  }
  useEffect(() => {
    fetchData();
  }, []);
  window.addEventListener('scroll', () => {
    setBreakScrollH(window.scrollY);
  });

  function handleScroll(e) {
    const scrollPercentage = (e.target.scrollTop / e.target.scrollHeight) * 100;
    setElmentScrollPercentage(scrollPercentage);
  }

  return (
    <div className='w-full h-124 gap-3 transform duration-500 ease-out items-center flex-col flex'>
      <div
        className={`w-full ${
          breakScrollH >= 58 ? 'top-0' : 'top-13'
        } flex bg-white  z-40  items-center gap-1 fixed flex-col`}
      >
        <h2 className='underline select-none '>Scroll Indicator</h2>
        <span className=' items-start justify-center flex h-3 w-full flex-col transform duration-500 bg-blue-500 ease-out overflow-y-auto gap-2'>
          <span
            style={{ width: `${elmentScrollPercentage}%` }}
            className='flex h-2 rounded-tr-full rounded-br-full flex-col transform duration-500 bg-green-500 ease-out overflow-y-auto gap-2'
          ></span>
        </span>
      </div>
      <span
        onScroll={handleScroll}
        className=' mt-7 text-white items-center bg-gray-900 flex w-1/2 flex-col pb-40 transform duration-500 ease-out overflow-y-auto gap-2'
      >
        {data?.map((product) => (
          <h2 className='text-vsm'>{product.title}</h2>
        ))}
      </span>
    </div>
  );
}

export default ScrollIndicator;
