import { useSelector } from "react-redux";
import List from "../board/list/List";
import styled from "styled-components";
import Write from "../board/write/Write";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Main = () => {
  const { write } = useSelector((state) => state.board);
  return <StyledMain>{write ? <Write /> : <List />}</StyledMain>;
};

export default Main;
