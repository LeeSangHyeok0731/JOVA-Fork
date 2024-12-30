import { useState } from "react";

type Article = {
  User: string;
  Title: string;
  Time: string;
  Contents: string;
  Num: number;
};

type Input = {
  title?: string;
  content?: string;
  category?: number;
  author?: string;
  endsAt?: string;
};

const usePostArticleList = () => {
  const [data, setData] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const url =
    "https://port-0-jova-backend-m0kvtwm45b2f2eb2.sel4.cloudtype.app/articles";

  const postArticle = async ({
    title,
    content,
    category,
    author,
    endsAt,
  }: Input) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "aGJojaL6CSEzapYxaK24DLAm+Bp1mUaQ8VvHxyOufDU=",
        },
        body: JSON.stringify({
          title: title,
          content: content,
          category: category,
          author: author,
          endsAt: endsAt,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result: Article[] = await response.json();
      setData(result);
    } catch (error) {
      setError("요청 실패!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { postArticle, data, loading, error };
};

export default usePostArticleList;
