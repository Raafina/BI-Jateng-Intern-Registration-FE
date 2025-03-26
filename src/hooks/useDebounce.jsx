import { useRef, useCallback } from 'react';

const useDebounce = () => {
  const debounceTimeout = useRef(null);

  const debounce = useCallback((func, delay) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      func();
      debounceTimeout.current = null;
    }, delay);
  }, []);

  return debounce;
};

export default useDebounce;
