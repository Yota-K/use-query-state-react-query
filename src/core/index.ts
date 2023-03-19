import { useQueryClient, useQuery, QueryKey } from '@tanstack/react-query';

// hook types
export type InitialType<A> = A | undefined;
export type ResultType<B> = [B, (arg: ((arg: B) => void) | B) => void];
export type { QueryKey };

export const useQueryState = <T>(key: QueryKey, initial?: InitialType<T>): ResultType<T> => {
  // getter
  const stateValue = useQuery<T>(key, {
    enabled: false,
    ...(initial !== undefined ? { initialData: initial } : {}),
  }).data as T;

  // setter
  const queryClient = useQueryClient();

  const stateSetter = (arg: ((arg: T) => void) | T) => {
    let newValue;

    const prev = queryClient.getQueryData<T>(key);

    if (prev === undefined) return;

    if (typeof arg === 'function') {
      newValue = (arg as (arg: T) => T)(prev);
    } else {
      newValue = arg;
    }

    queryClient.setQueryData<T>(key, newValue);
  };

  return [stateValue, stateSetter];
};
