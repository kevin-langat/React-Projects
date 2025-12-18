import { useEffect } from 'react';

function useOutSideClickHook(ref, handler) {
  useEffect(() => {
    function listenner(event) {
      if (!ref.current || !ref.current.contains(event.target)) {
        handler();
        console.log('yes');
      }
    }
    document.addEventListener('mousedown', listenner);
    document.addEventListener('touchstart', listenner);

    return () => {
      document.removeEventListener('mousedown', listenner);
      document.removeEventListener('touchstart', listenner);
    };
  }, []);
}

export default useOutSideClickHook;
