import { useSelector } from "react-redux";
import List from "../board/list/List";
import styled from "styled-components";
import Write from "../board/\bwrite/Write";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Main = () => {
  const { edit } = useSelector((state) => state.board);
  return <StyledMain>{edit ? <Write /> : <List />}</StyledMain>;
};

export default Main;
