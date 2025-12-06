import React, { useEffect, useState } from 'react';

function LoadMoreComponent() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageAmount, setImageAmount] = useState(9);

  async function fetchImages() {
    try {
      setLoading(true);
      const request = await fetch(
        'https://picsum.photos/v2/list?page=2&limit=50',
        {
          method: 'GET',
        }
      );
      const result = await request.json();
      setLoading(false);
      result && result.length > 0 ? setImages(result) : setImages([]);
    } catch (error) {
      setError(error);
    }
  }
  console.log(error);
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className='flex flex-col *:even:-mb-3 items-center w-full gap-4'>
      <h2 className='underline select-none'>Load More Component</h2>
      <div className=' h-100 rounded-[0.5em] w-3/5 overflow-x-auto py-2  bg-gray-800 flex flex-col items-center justify-center overflow-y-auto custom-scrollbar outline-1l gap-2  outline-gray-600'>
        {loading === true ? (
          <span className='loader'></span>
        ) : (
          <div className=' w-full p-2 h-full grid grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-4 '>
            {images?.map((image, index) =>
              index <= imageAmount ? (
                <div
                  key={index}
                  className='bg-gray-700 outline-1 p-1 outline-gray-500  h-32 w-full'
                >
                  <img
                    className='h-30 w-full'
                    src={image.download_url}
                    alt=''
                  />
                </div>
              ) : null
            )}
          </div>
        )}
      </div>
      <button
        onClick={() => {
          imageAmount < 49 ? setImageAmount(imageAmount + 5) : null;
        }}
        disabled={imageAmount === 49}
        className=' disabled:bg-gray-400 bg-sky-500 cursor-pointer px-1 py-0.5 text-gray-200 rounded-[0.3em]'
      >
        Load More Images
      </button>
      <h2
        className={`${
          imageAmount === 49 ? 'flex text-vsm text-red-500' : 'hidden'
        }`}
      >
        No more images to load
      </h2>
    </div>
  );
}

export default LoadMoreComponent;
