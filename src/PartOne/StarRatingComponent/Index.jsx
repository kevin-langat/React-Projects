import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
function StarRatingComponent() {
  const [clickedStar, setClickedStar] = useState(0);
  const [hoveredStars, setHoveredStars] = useState(0);

  function handleMouseLeave(index) {
    if (hoveredStars > clickedStar) {
      setHoveredStars(clickedStar);
    }
  }

  function handleClickedStars(index) {
    if (clickedStar === 1) {
      setClickedStar(0);
    } else {
      setClickedStar(index + 1);
    }
  }

  function handleHoveredStars(index) {
    setHoveredStars(index + 1);
  }
  return (
    <div className='flex flex-col items-center w-full gap-4'>
      <h2 className='underline'>Star Rating Component</h2>
      <div className='bg-gray-800 w-1/3 p-2 rounded-[0.3em] outline-1 outline-gray-600 flex flex-col items-center justify-center'>
        <div className='w-3/4 gap-2 h-14 justify-center bg-gray-700 rounded-[0.3em] flex flex-row items-center '>
          {[...Array(5)].map((gey, index) => (
            <FaStar
              size={40}
              key={index}
              onClick={() => handleClickedStars(index)}
              onMouseEnter={() => handleHoveredStars(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className={`${
                index + 1 <= hoveredStars || index + 1 <= clickedStar
                  ? 'text-orange-500 scale-115'
                  : 'bg-transparen scale-100'
              } stroke-20 transform duration-200 ease-out delay-75  stroke-sky-600 `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StarRatingComponent;
