import { QueryKey, useQueryClient, useQuery } from '@tanstack/react-query';

export const useQueryState = <T>(key: QueryKey, initial?: T): [T, (arg: T) => void] => {
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
