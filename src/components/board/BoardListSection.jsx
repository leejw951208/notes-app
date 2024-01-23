import styled from "styled-components";
import Board from "./Board";
import Button from "../button/Button";
import SearchSection from "../search/SearchSection";
import { useDispatch } from "react-redux";
import { boardActions } from "../../store/board-slice";

const BoardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 420px;
  overflow-y: overlay;
`;

const ButtonSection = styled.section`
  display: flex;
  justify-content: flex-end;
`;

const BoardListSection = () => {
  const dispatch = useDispatch();

  const handleAddBoard = () => {
    dispatch(boardActions.setEdit(true));
  };

  return (
    <>
      <SearchSection />
      <BoardSection>
        <Board />
        <Board />
        <Board />
        <Board />
      </BoardSection>
      <ButtonSection>
        <Button
          backgroundColor={"#2C61F0"}
          hoverBackgroundColor={"#1448D3"}
          color={"white"}
          name={"New Board"}
          onClick={handleAddBoard}
        />
      </ButtonSection>
    </>
  );
};

export default BoardListSection;
