import { useLayoutEffect, useState } from 'react';

function useWindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  function handleWindowResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useLayoutEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return windowSize;
}

export default useWindowResize;
