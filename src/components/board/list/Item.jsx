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

const Board = () => {
  return (
    <Article>
      <h2>title</h2>
      <p>description</p>
    </Article>
  );
};

export default Board;