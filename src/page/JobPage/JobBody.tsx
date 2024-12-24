import { useState } from "react";
import styled from "styled-components";
import MiniJob from "./MiniJob";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Text = styled.h1`
  font-family: "Pretendard-Regular", sans-serif;
  margin: 0;
  font-size: 44px;
`;

const Wrapper = styled.div`
  top: 100px;
  position: absolute;
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DividSpace = styled.div`
  width: 20px;
  height: 2px;
  background-color: gray;
  margin-top: 20px;
  margin-bottom: 40px;
`;

type TextPProps = {
  marginLeft: number;
};

const TextP = styled.p<TextPProps>`
  font-family: "Pretendard-Regular", sans-serif;
  margin: 0;
  margin-left: ${({ marginLeft }) => `${marginLeft}px`};
`;

const MiniJobWrapper = styled.div`
  width: 1103px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListWrapper = styled.div`
  width: 1103px;
  height: 23px;
  display: flex;
  align-items: center;
  border-bottom: 4px solid gray;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button<{ active: boolean }>`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: ${({ active }) => (active ? "#007BFF" : "#f0f0f0")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const NotificationButtonBox = styled.div`
  width: 150px;
  height: 54px;
  border: 1px solid #b0b0b0;
  border-radius: 15px;
  display: flex;
  margin-left: 950px;
  align-items: center;
  justify-content: center;
`;

const NotificationButton = styled(Link)`
  text-decoration-line: none;
  color: black;
`;

type NotionProps = {
  User: string;
  Title: string;
  Time: string;
  Contents: string;
};

function JobBody() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [TempArray, setTempArray] = useState();

  const Api = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://port-0-jova-backend-m0kvtwm45b2f2eb2.sel4.cloudtype.app/articles/list",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer your_access_token",
          },
        }
      );

      if (!response.ok) {
        throw new Error("응답 오류");
      }

      const responseData = await response.json(); // JSON 응답 데이터 파싱
      console.log(responseData);
      setTempArray(responseData); // 성공 시 응답 데이터 저장
    } catch (error) {
      setError("요청 실패!"); // 에러 처리
    } finally {
      setLoading(false); // 로딩 종료
    }
  };

  useEffect(() => {
    console.log("api 요청 보내기");
    Api();
  }, []);

  return (
    <Wrapper>
      <Text>구인구직</Text>
      <DividSpace />
      <MiniJobWrapper>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          TempArray?.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
          ).map((item: NotionProps) => <MiniJob key={item.Title} {...item} />)
        )}
      </MiniJobWrapper>
      <PaginationWrapper>
        {Array.from(
          { length: Math.ceil((TempArray?.length || 0) / itemsPerPage) },
          (_, index) => (
            <PageButton
              key={index}
              active={currentPage === index + 1}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </PageButton>
          )
        )}
      </PaginationWrapper>
      <NotificationButtonBox>
        <NotificationButton to="/notification">
          구인구직 작성하기
        </NotificationButton>
      </NotificationButtonBox>
    </Wrapper>
  );
}

export default JobBody;
