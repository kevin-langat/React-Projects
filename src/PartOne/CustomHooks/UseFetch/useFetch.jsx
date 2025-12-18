import { useEffect, useState } from 'react';

function useFetch(url, options = {}) {
  const [pending, setPending] = useState(false);
  const [data, setData] = useState(null);

  async function fetchData() {
    setPending(true);
    try {
      const res = await fetch(url, { ...options });
      if (!res.ok) throw new Error(res.statusText);
      const result = await res.json();

      setTimeout(() => {
        setData(result);
        setPending(false);
      }, 1000);
    } catch (error) {
      console.log(error);
      setPending(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, pending };
}

export default useFetch;
