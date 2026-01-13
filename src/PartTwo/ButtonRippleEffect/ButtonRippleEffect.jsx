import { useEffect, useState } from 'react';

function ButtonRippleEffect() {
  const [isRippling, setIsRippling] = useState(false);
  const [coordinates, setCoordinates] = useState({
    x: -1,
    y: -1,
  });
  function handleRippleEffect(e) {
    const rect = e.target.getBoundingClientRect();
    setCoordinates({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }
  console.log(isRippling);
  useEffect(() => {
    if (coordinates.x !== -1 && coordinates.y !== 1) {
      setIsRippling(true);
      setTimeout(() => {
        setIsRippling(false);
      }, 500);
    } else {
      setIsRippling(false);
    }
  }, [coordinates]);

  useEffect(() => {
    if (!isRippling) {
      setCoordinates({
        x: -1,
        y: -1,
      });
    }
  }, []);
  return (
    <div className='flex flex-col gap-3'>
      <h2>Button Ripple Effect</h2>

      <button
        onClick={handleRippleEffect}
        className='ripple-btn bg-blue-500 px-2 py-1 text-white rounded-full'
      >
        {isRippling ? (
          <span
            className='ripple-span'
            style={{ left: coordinates.x, top: coordinates.y }}
          ></span>
        ) : null}
        See Button Ripple Effect
      </button>
    </div>
  );
}
export default ButtonRippleEffect;
