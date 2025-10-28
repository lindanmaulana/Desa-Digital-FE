import { useEffect, useState } from 'react';

interface useCountDownProps {
  start: boolean;
  end: boolean;
  time: number;
}

export const useCountDown = ({ start, end, time }: useCountDownProps): number => {
  const [count, setCount] = useState<number>(time);

  useEffect(() => {
    if (count <= 0) return;

    if (start) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);

        if (end) return;
        
      }, 1000);

      return () => clearInterval(timer);
    }

  }, [count, start, end]);

  return count;
};
