import { useState, useEffect } from 'react';
import APIClient, { type FetchResponse } from '../services/api-client';
import { CanceledError, type AxiosRequestConfig } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps: any[] = []) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const apiClient = new APIClient<T>(endpoint);

    setLoading(true);

    apiClient
      .getAll({
        signal: controller.signal,
        ...requestConfig,
      })
      .then((res: FetchResponse<T>) => {
        setData(res.results);
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (err instanceof CanceledError) return;

        if (err && typeof err === 'object' && 'message' in err) {
          setError(String((err as { message?: string }).message ?? 'Request failed'));
        } else {
          setError('Request failed');
        }

        setLoading(false);
      });

    return () => controller.abort();
  }, deps);

  return {
    data,
    error,
    isLoading,
  };
};

export default useData;
