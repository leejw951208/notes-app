import styled from "styled-components";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: none;
  border-radius: 1rem;
  background-color: #fff;
  padding: 15px 20px;
  cursor: pointer;
  &:hover {
    background-color: #d5d5d5;
  }
`;

const Board = ({ title, content, onClick }) => {
  return (
    <Article onClick={onClick}>
      <h2>{title}</h2>
      <p>{content}</p>
    </Article>
  );
};

export default Board;
