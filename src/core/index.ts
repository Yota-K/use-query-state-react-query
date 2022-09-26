import { useQueryClient, useQuery, QueryKey } from '@tanstack/react-query';

// hook types
export type InitialType<A> = A | undefined;
export type ResultType<B> = [B, (arg: B) => void];
export type { QueryKey };

export const useQueryState = <T>(key: QueryKey, initial?: InitialType<T>): ResultType<T> => {
  // getter
  const stateValue = useQuery<T>(key, {
    enabled: false,
    ...(initial !== undefined ? { initialData: initial } : {}),
  }).data as T;

  // setter
  const queryClient = useQueryClient();
  const stateSetter = (arg: T) => queryClient.setQueryData<T>(key, arg);

  return [stateValue, stateSetter];
};
