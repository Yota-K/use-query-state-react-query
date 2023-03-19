import React from 'react';
import Render from './Render';
import { useQueryState } from '../core/index';

const Counter: React.FC = () => {
  const [_, setCount] = useQueryState(['COUNTER'], 1);
  const countUp = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h2>Counter Component</h2>
      <button onClick={countUp}>Click</button>
      <Render />
    </div>
  );
};

export default Counter;
