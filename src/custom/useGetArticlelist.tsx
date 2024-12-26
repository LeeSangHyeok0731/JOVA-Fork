import { useState, useEffect } from "react";

type Article = {
  User: string;
  Title: string;
  Time: string;
  Contents: string;
  Num: number;
};

const useGetAricleList = () => {
  const [data, setData] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const url: string =
    "https://port-0-jova-backend-m0kvtwm45b2f2eb2.sel4.cloudtype.app/articles/list";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer your_access_token",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError("요청 실패!");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useGetAricleList;
