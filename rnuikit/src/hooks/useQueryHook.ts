import {
  useQuery as useReactFetchQuery,
  useMutation as useReactMutationQuery,
} from '@tanstack/react-query';
import { ReactQueryGetConfig, ReactQueryMutationConfig } from '@/types/reactQueryConfig';
import { apiTrigger } from '@/api/apiTrigger';
import { queryKeys } from '@/api';

export const useQuery = <T>(config: ReactQueryGetConfig<T>) => {
  const { method = 'GET' } = config;
  const updatedQueryKey = generateQueryKey(config);
  const queryFn = () => apiTrigger<T>({ ...config, method });
  return useReactFetchQuery({ ...config, queryFn, queryKey: updatedQueryKey });
};

export const useMutation = <T>(config: ReactQueryMutationConfig<T>) => {
  const { method = 'POST' } = config;
  const mutationFn = (requestBody: unknown = null) =>
    apiTrigger<T>({ ...config, requestBody, method });
  return useReactMutationQuery({ ...config, mutationFn });
};

export const generateQueryKey = <T>(config: ReactQueryGetConfig<T>) => {
  const { queryKey, queryParams, shouldPersist } = config;
  const keyParts = shouldPersist ? [...queryKeys.persist, ...queryKey] : [...queryKey];

  if (queryParams) {
    const sortedParams = Object.entries(queryParams).sort();
    sortedParams.forEach(([paramName, paramValue]) => {
      if (paramValue !== undefined && paramValue !== null) {
        keyParts.push(paramName, paramValue.toString());
      }
    });
  }

  return keyParts;
};

export const useQueryHook = () => {
  return { useQuery, useMutation };
};

/*
Usage examples:

Using useQuery
const { data, error, isLoading } = useQuery(apiConfig.categories);
*/

/*
Using useMutation
const mutation = useMutation({
  ...apiConfig.createCategory,
  onSuccess: (data) => {
    console.log('Category created!', data);
  },
  onError: (error) => {
    console.error('Creation failed!', error);
  },
});
*/
