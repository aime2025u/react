
import { useEffect, useState } from "react";

export default function useThrottle(value, delay = 300) {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setThrottledValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return throttledValue;
}
