import styled from "styled-components";
import Button from "../button/Button";
import BoardEdit from "./BoardEdit";
import { useDispatch } from "react-redux";
import { boardActions } from "../../store/board-slice";

const BoardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterButtonSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

const BoardEditSection = () => {
  const dispatch = useDispatch();

  const handleCancelBoard = () => {
    dispatch(boardActions.setEdit(false));
  };

  return (
    <>
      <section>
        <Button
          backgroundColor={"#7B7B7B"}
          color={"white"}
          hoverBackgroundColor={"#626262"}
          name={"< Back"}
          onClick={handleCancelBoard}
        />
      </section>
      <BoardSection>
        <BoardEdit />
      </BoardSection>
      <FooterButtonSection>
        <Button
          backgroundColor={"#E53B48"}
          hoverBackgroundColor={"#D31414"}
          color={"white"}
          name={"Remove"}
        />
        <Button
          backgroundColor={"#2C61F0"}
          hoverBackgroundColor={"#1448D3"}
          color={"white"}
          name={"Save"}
        />
      </FooterButtonSection>
    </>
  );
};

export default BoardEditSection;
