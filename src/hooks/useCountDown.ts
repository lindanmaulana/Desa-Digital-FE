import { useEffect, useState } from 'react';

interface useCountDownProps {
  play: boolean;
  count: number;
}

export const useCountDown = ({ play, count }: useCountDownProps): number => {
  const [countDown, setCountDown] = useState<number>(count);
  
  useEffect(() => {
    if (play) setCountDown(count)
  }, [play, count])

  useEffect(() => {
    if (!play || countDown <= 0) return;

      const timer = setInterval(() => {
        setCountDown((prevCount) => {
          if (prevCount <= 1) return 0

          return prevCount - 1
        });

      }, 1000);

      return () => clearInterval(timer);
  }, [play, countDown]);

  return countDown;
};
