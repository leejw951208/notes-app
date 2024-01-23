import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 0 10px;
  font-size: 16px;
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

const BoardEdit = () => {
  return (
    <>
      <Input type="text" placeholder="제목" />
      <Input type="text" placeholder="기간" />
      <Input type="text" placeholder="스킬" />
      <Input type="text" placeholder="요약" />
      <TextArea rows="10" placeholder="설명"></TextArea>
      <Input type="text" placeholder="링크" />
    </>
  );
};

export default BoardEdit;
