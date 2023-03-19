# useQueryState
This library so as to manage global state for [TanStack Query](https://github.com/tanstack/query).   
If you installed this library, you can manage global state other than data fetch.

## Installing

Using npm:

```
npm i use-query-state-react-query
```

Using yarn:

```
yarn add use-query-state-react-query
```

## Usage example

App.tsx

```tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Counter from './components/Counter';
import CounterHoge from './components/CounterHoge';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Counter />
      <CounterHoge />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
```

Counter.tsx

```tsx
import React from 'react';
import { useQueryState } from 'use-query-state-react-query';

const Counter: React.FC = () => {
  const [count, setCount] = useQueryState(['COUNTER'], 1);
  const countUp = () => {
    setCount((prev) => prev + 1);
  };

  // Another case.
  // const countUp = () => {
  //   setCount(count + 1);
  // };
  return (
    <div>
      <h2>Counter Component</h2>
      <p>{count}</p>
      <button onClick={countUp}>countUp</button>
    </div>
  );
};

export default Counter;
```

CounterHoge.tsx

```tsx
import React from 'react';
import { useQueryState } from 'use-query-state-react-query';

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
```
