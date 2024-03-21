import { userState, useCallback } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = userState(false);
  const [error, setError] = userState();

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      try {
        const responce = await fetch(url, {
          method,
          body,
          headers,
        });

        const responceData = await responce.json();
        if (!responce.ok) {
          throw new Error(responceData.message);
        }

        return responceData;
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  return { isLoading, error, sendRequest, clearError};
};
