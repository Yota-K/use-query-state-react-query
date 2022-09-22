import React from 'react';
import { useQueryState } from '../core/index';

const CounterHoge: React.FC = () => {
  const [count] = useQueryState<number>(['COUNTER']);
  return (
    <div>
      <h2>CounterHoge Component</h2>
      <p>{count}</p>
    </div>
  );
};

export default CounterHoge;
