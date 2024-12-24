import Wrapper from "./contentsWrapper/ContentsWrapper";
import SearchBar from "./SearchHome";
import styled from "styled-components";

const Body = styled.div`
  width: 100%;
  height: 756px;
  position: absolute;
  top: 124px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function HomeBody() {
  return (
    <Body>
      <SearchBar />
      <Wrapper />
    </Body>
  );
}

export default HomeBody;
