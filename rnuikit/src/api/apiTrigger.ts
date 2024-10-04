import {ReactQueryConfig} from '@/types/reactQueryConfig';
import {ApiClient, ApiGuestClient} from './apiClient';

export interface IUseAPI extends ReactQueryConfig {
  requestBody?: unknown;
  queryParams?: object;
}

export const apiTrigger = async <T>(config: IUseAPI): Promise<T> => {
  const {url, method, useApiGuestClient, queryParams, customHeaders, requestBody} = config;

  // ApiGuestClient can be used for API that don't need auth
  const axiosClient = useApiGuestClient ? ApiGuestClient : ApiClient;

  // Return the actual query function using axios
  const res = await axiosClient.request<T>({
    method,
    url,
    params: queryParams,
    headers: {...customHeaders},
    data: requestBody
  });

  return res.data;
};
