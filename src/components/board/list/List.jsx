import styled from "styled-components";
import Item from "./Item";
import Button from "../../common/Button";
import { useDispatch } from "react-redux";
import { boardActions } from "../../../store/board-slice";
import SearchSection from "../../search/Search";

const ItemSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 320px;
  overflow-y: overlay;
`;

const ButtonSection = styled.section`
  display: flex;
  justify-content: flex-end;
`;

const List = () => {
  const dispatch = useDispatch();

  const handleAddBoard = () => {
    dispatch(boardActions.setEdit(true));
  };

  return (
    <>
      <SearchSection />
      <ItemSection>
        <Item />
        <Item />
        <Item />
        <Item />
      </ItemSection>
      <ButtonSection>
        <Button
          backGroundColor="#2C61F0"
          hoverBackGroundColor="#1448D3"
          color="white"
          name="Create Note"
          onClick={handleAddBoard}
        />
      </ButtonSection>
    </>
  );
};

export default List;
