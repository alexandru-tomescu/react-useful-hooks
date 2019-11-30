import { useEffect, useRef } from 'react';


const useTimeout = (delay: number, cb: () => any) => {
  const savedCallback = useRef<any>();

  useEffect(() => {
    savedCallback.current = cb;
  }, [cb]);

  if (delay) {
    useEffect(() => {
      const id = setTimeout(savedCallback.current, delay);
      return () => clearTimeout(id);
    }, [delay]);
  }
}


export default useTimeout;