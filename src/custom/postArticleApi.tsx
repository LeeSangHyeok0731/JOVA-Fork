import { useState, useEffect, useCallback } from "react";
import axios from "axios";

type UseApiOptions = {
  immediate?: boolean; // 요청을 즉시 실행할지 여부
  onSuccess?: (data: any) => void; // 성공 시 호출할 콜백
  onError?: (error: axios.AxiosError) => void; // 실패 시 호출할 콜백
};

type UseApiReturn<T> = {
  data: T | null;
  error: axios.AxiosError | null;
  loading: boolean;
  fetchData: (customConfig?: axios.AxiosRequestConfig) => Promise<void>;
};

function useApi<T = any>(
  url: string,
  config: axios.AxiosRequestConfig = {},
  options: UseApiOptions = {}
): UseApiReturn<T> {
  const { immediate = true, onSuccess, onError } = options;

  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<axios.AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(
    async (customConfig: axios.AxiosRequestConfig = {}) => {
      setLoading(true);
      setError(null);

      try {
        const response: axios.AxiosResponse<T> = await axios({
          url,
          ...config,
          ...customConfig,
        });
        setData(response.data);

        if (onSuccess) {
          onSuccess(response.data);
        }
      } catch (err) {
        const axiosError = err as axios.AxiosError;
        setError(axiosError);

        if (onError) {
          onError(axiosError);
        }
      } finally {
        setLoading(false);
      }
    },
    [url, config, onSuccess, onError]
  );

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [fetchData, immediate]);

  return { data, error, loading, fetchData };
}

export default useApi;
