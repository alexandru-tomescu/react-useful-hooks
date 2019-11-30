import { useEffect, useRef } from 'react';


type useTimeoutCbType = () => any;

const useTimeout = (delay: number, cb: useTimeoutCbType) => {
  const savedCallback = useRef<useTimeoutCbType>(cb);

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