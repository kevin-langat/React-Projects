import useFetch from './useFetch';

function UseFetchHook() {
  const { data, pending } = useFetch(
    'https://dummyjson.com/products?limit=100',
    {}
  );

  return (
    <div className='w-full h-125  gap-4 items-center flex-col flex'>
      <h2 className='underline select-none'>Custom Hooks</h2>
      <h2 className='underline select-none'>use Effect Hook</h2>
      <span className=' pt-3 custom-scrollbar rounded-[0.3em] text-white items-center bg-gray-900 flex w-1/2 flex-col text-vsm pb-5 transform duration-500 ease-out overflow-y-auto gap-2'>
        <h2>All Products</h2>
        {pending ? (
          <h2>Loading please wait...</h2>
        ) : (
          data?.products.map((item) => (
            <div className='w-1/2 outline-1 outline-gray-500 h-40 flex flex-col items-center justify-around p-1 bg-gray-800 rounded-[0.2em]'>
              <img src={item.thumbnail} className='w-40 h-34' alt='' />

              <h2>{item.title}</h2>
            </div>
          ))
        )}
      </span>
    </div>
  );
}

export default UseFetchHook;
