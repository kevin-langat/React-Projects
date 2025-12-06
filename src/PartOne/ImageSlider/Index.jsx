import { ArrowLeft, ArrowRight, Circle } from 'lucide-react';
import { useEffect, useState } from 'react';

function ImageSlider() {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);

  function handleMoveToPrevImage() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleMoveToNextImage() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  function handleSlideImage(index) {
    setCurrentSlide(index);
  }

  async function fetchImages() {
    try {
    } catch (error) {
      setErrorMsg(error);
    }
    const response = await fetch(
      'https://picsum.photos/v2/list?page=2&limit=10'
    );
    const result = await response.json();
    result && result.length > 0 ? setImages(result) : setImages([]);
  }
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div className='flex flex-col *:even:-mb-3 items-center w-full gap-4'>
      <h2 className='underline select-none'>Image Slider</h2>
      <div className=' h-48 p-0.5 rounded-[0.5em] w-1/5 overflow-x-auto  bg-gray-800 outline-1 flex-row flex gap-2  outline-gray-600'>
        {images?.map((image, index) => (
          <div
            key={image.id}
            className={`${
              currentSlide !== index ? 'hidden' : 'flex'
            }  items-center select-none h-full justify-center w-full flex-row shrink-0`}
          >
            <img
              className={`shrink-0 w-full h-full object-cover rounded-lg shadow-lg`}
              src={image.download_url}
              alt=''
            />
          </div>
        ))}
      </div>
      <div className='flex *:odd:bg-green-500 *:odd:rounded-full flex-row items-center justify-around w-1/5'>
        <ArrowLeft onClick={handleMoveToPrevImage} />
        <div className='bg-gray-700 flex flex-row items-center justify-around top-40 max-w-3/4 overflow-x-hidden px-1 rounded-full h-7 z-50 text-gray-300'>
          {images?.map((image, index) => (
            <Circle
              key={image.id}
              size={16}
              onClick={() => handleSlideImage(index)}
              className={`${
                currentSlide !== index
                  ? 'fill-gray-300/20'
                  : 'fill-gray-200 transform duration-200 ease-in outline-0'
              }`}
            />
          ))}
        </div>
        <ArrowRight onClick={handleMoveToNextImage} />
      </div>
    </div>
  );
}

export default ImageSlider;
