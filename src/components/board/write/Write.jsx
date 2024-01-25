import styled from "styled-components";
import Button from "../../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { boardActions } from "../../../store/board-slice";
import Input from "../../common/Input";
import { useEffect, useRef, useState } from "react";
import uuid from "react-uuid";
import moment from "moment";
import "moment/locale/ko";

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
  justify-content: ${(props) => (props.$align ? "space-between" : "flex-end")};
`;

const Div = styled.div`
  width: 100%;
  height: 40px;
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
  const { editId, notes } = useSelector((state) => state.board);

  const [inputValue, setInputValue] = useState({
    id: "",
    title: "",
    content: "",
  });

  useEffect(() => {
    let editNote = {};
    if (editId && notes.length > 0) {
      editNote = notes.find((note) => note.id === editId);
      setInputValue((prev) => {
        return {
          ...prev,
          id: editNote.id,
          title: editNote.title,
          content: editNote.content,
        };
      });
    }
  }, []);

  const handleInputChange = (identifier, e) => {
    setInputValue((prev) => {
      return {
        ...prev,
        [identifier]: e.target.value,
      };
    });
  };

  const handleCancelBoard = () => {
    dispatch(boardActions.setWrite(false));
  };

  const handleAddNote = () => {
    dispatch(
      boardActions.addNote({
        id: uuid(),
        title: inputValue.title,
        content: inputValue.content,
        createdDate: moment().format("YYYY-MM-DD HH:mm:ss"),
        modifiedDate: moment().format("YYYY-MM-DD HH:mm:ss"),
      })
    );
  };

  const handleEditNote = () => {
    dispatch(
      boardActions.editNote({
        id: inputValue.id,
        title: inputValue.title,
        content: inputValue.content,
        modifiedDate: moment().format("YYYY-MM-DD HH:mm:ss"),
      })
    );
  };

  const handleRemoveNote = () => {
    dispatch(boardActions.removeNote(inputValue.id));
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
          <Input
            type="text"
            placeholder="Note title"
            backGroundColor="#fff"
            value={inputValue.title}
            onChange={(e) => handleInputChange("title", e)}
          />
        </Div>
        <TextArea
          rows="10"
          placeholder="Enter note text"
          value={inputValue.content}
          onChange={(e) => handleInputChange("content", e)}
        ></TextArea>
      </WriteSection>
      <FooterButtonSection $align={inputValue.id}>
        {inputValue.id && (
          <Button
            backGroundColor="#E53B48"
            hoverBackGroundColor="#D31414"
            color="white"
            name="Remove"
            onClick={handleRemoveNote}
          />
        )}
        <Button
          backGroundColor="#2C61F0"
          hoverBackGroundColor="#1448D3"
          color="white"
          name="Done"
          onClick={inputValue.id ? handleEditNote : handleAddNote}
          isActive={inputValue.title && inputValue.content}
        />
      </FooterButtonSection>
    </>
  );
};

export default Write;
