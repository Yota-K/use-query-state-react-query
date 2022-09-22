import React from 'react';
import { useQueryState } from '../core/index';

const Counter: React.FC = () => {
  const [count, setCount] = useQueryState(['COUNTER'], 1);
  const countUp = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Counter Component</h2>
      <p>{count}</p>
      <button onClick={countUp}>countUp</button>
    </div>
  );
};

export default Counter;
