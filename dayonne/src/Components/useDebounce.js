import { useEffect } from "react";
import { useState } from "react";

export const useDebounce = ({ value, delay = 300 }) => {
  const [debouncedvalue, setDebouncedvalue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedvalue(value);
    }, delay);
    return () => clearInterval(timer);
  }, [value, delay]);
  return debouncedvalue;
};
