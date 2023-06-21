import { useState, useEffect } from 'react';

const useCounter = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + props.countInterval);
    }, 1000);

    return () => clearInterval(interval);
  }, [props.countInterval]);

  return counter;
};

export default useCounter;