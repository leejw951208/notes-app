import { useSelector } from "react-redux";
import BoardEditSection from "./board/BoardEditSection";
import BoardListSection from "./board/BoardListSection";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const MainSection = () => {
  const { edit } = useSelector((state) => state.board);
  return <Main>{edit ? <BoardEditSection /> : <BoardListSection />}</Main>;
};

export default MainSection;
