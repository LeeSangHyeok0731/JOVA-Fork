import { useState } from "react";
import styled from "styled-components";
import MiniJob from "./MiniJob";
import { Link } from "react-router-dom";
import useGetAricleList from "../../custom/useGetArticlelist";

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

const MiniJobWrapper = styled.div`
  width: 1103px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

function JobBody() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data, loading, error } = useGetAricleList();

  return (
    <Wrapper>
      <Text>구인구직</Text>
      <DividSpace />
      <MiniJobWrapper>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : data?.length ? (
          data
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((item) => <MiniJob key={item.Num} {...item} />)
        ) : (
          <p>No items available</p>
        )}
      </MiniJobWrapper>
      <PaginationWrapper>
        {data &&
          Array.from(
            { length: Math.ceil(data.length / itemsPerPage) },
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
