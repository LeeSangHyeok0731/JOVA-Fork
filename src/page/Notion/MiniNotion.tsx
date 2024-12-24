import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type NotionProps = {
  Num: number;
  User: string;
  Title: string;
  Time: string;
  Contents: string;
};

const Table = styled.div`
  width: 100%;
  border-collapse: collapse; /* 테이블 선 겹침 제거 */
  margin: 0; /* 테이블 자체 여백 제거 */
`;

const TableRow = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  padding: 5px 0; /* 상하 여백 최소화 */
  line-height: 1; /* 줄 간격 최소화 */
  &:hover {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.div<{ flex?: number }>`
  flex: ${({ flex }) => flex || 1};
  padding: 10px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function MiniNotion({ Num, User, Title, Time, Contents }: NotionProps) {
  const [number, setNumber] = useState(0);
  const [userName, setUserName] = useState("JOVA");
  const [title, setTitle] = useState("내용");
  const [date, setDate] = useState("20xx.xx.xx");
  const [content, setContent] = useState("# 오류");

  const go = useNavigate();

  useEffect(() => {
    setNumber(Num);
    setUserName(User);
    setTitle(Title);
    setDate(Time);
    setContent(Contents);
  }, [Num, User, Title, Time, Contents]);

  const handleClick = () => {
    go("/notion/detail", { state: { userName, title, date, content } });
  };

  return (
    <Table>
      <TableRow onClick={handleClick}>
        <TableCell flex={0.5}>{number}</TableCell>
        <TableCell flex={1}>{userName}</TableCell>
        <TableCell flex={2}>{title}</TableCell>
        <TableCell flex={1}>{date}</TableCell>
      </TableRow>
    </Table>
  );
}

export default MiniNotion;
