import { differenceInMilliseconds } from "date-fns";
import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

export function useCountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(differenceInMilliseconds(targetDate, new Date()));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const remainingTime = differenceInMilliseconds(targetDate, new Date());
      setTimeLeft(remainingTime);

      if (remainingTime <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}
