import React from 'react';
import { useQueryState } from '../core/index';

const Render: React.FC = () => {
  const [count] = useQueryState<number>(['COUNTER']);
  return (
    <div>
      <h2>Render Component</h2>
      <p>{count}</p>
    </div>
  );
};

export default Render;
