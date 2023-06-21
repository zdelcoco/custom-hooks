import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  const counter = useCounter({countInterval: 1});

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
