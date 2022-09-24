import React from 'react';
import Render from './Render';
import { useQueryState } from '../core/index';

const Counter: React.FC = () => {
  const [count, setCount] = useQueryState(['COUNTER'], 1);
  const countUp = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Counter Component</h2>
      <button onClick={countUp}>countUp</button>
      <Render />
    </div>
  );
};

export default Counter;
