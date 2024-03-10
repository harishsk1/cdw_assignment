import { useState, useEffect, useCallback } from "react";

const useFetch = (url, method = "GET", body = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const options = {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: body ? JSON.stringify(body) : null,
          signal,
        };

        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        // Check if the error is due to an aborted request
        if (error.name !== "AbortError") {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup function to abort the fetch when the component is unmounted
      controller.abort();
    };
  }, [url, method, body]); // Dependencies for the useEffect

  return { data, loading, error };
};

export default useFetch;
