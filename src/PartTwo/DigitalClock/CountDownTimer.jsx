import { useEffect, useRef, useState } from 'react';

function CountDownTimer({ initialTime, onTimeFinish }) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef();

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            if (onTimeFinish) {
              onTimeFinish();
            }

            return 0;
          }
          return prevTime - 1;
        });
      });
    } else {
      clearInterval(intervalRef);
    }
  }, [isRunning, onTimeFinish]);
  return <div>CountDownTimer</div>;
}
export default CountDownTimer;
