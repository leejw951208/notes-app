import styled from "styled-components";
import Button from "../../common/Button";
import { useDispatch } from "react-redux";
import { boardActions } from "../../../store/board-slice";
import Input from "../../common/Input";

const WriteSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TopButtonSection = styled.section`
  display: flex;
  justify-content: flex-start;
`;

const FooterButtonSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Div = styled.div`
  width: 100%;
  height: 40px;
`;

const Div2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  gap: 30px;
`;

const TextArea = styled.textarea`
  border: none;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 10px;
  font-size: 16px;
  resize: none;
`;

const Write = () => {
  const dispatch = useDispatch();

  const handleCancelBoard = () => {
    dispatch(boardActions.setEdit(false));
  };

  return (
    <>
      <TopButtonSection>
        <Button
          backGroundColor="#7B7B7B"
          color="white"
          hoverBackGroundColor="#626262"
          name="< Back"
          onClick={handleCancelBoard}
        />
      </TopButtonSection>
      <WriteSection>
        <Div>
          <Input type="text" placeholder="Note title" backGroundColor="#fff" />
        </Div>
        <TextArea rows="10" placeholder="Enter note text"></TextArea>
      </WriteSection>
      <FooterButtonSection>
        <Button
          backGroundColor="#E53B48"
          hoverBackGroundColor="#D31414"
          color="white"
          name="Remove"
        />
        <Button
          backGroundColor="#2C61F0"
          hoverBackGroundColor="#1448D3"
          color="white"
          name="Done"
        />
      </FooterButtonSection>
    </>
  );
};

export default Write;