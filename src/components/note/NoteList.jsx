import styled from "styled-components";

const Article = styled.article`
  border: none;
  border-radius: 1rem;
  background-color: #fff;
  padding: 15px;
  margin-top: 10px;
`;

const NoteList = () => {
  return (
    <Article>
      <h2>title</h2>
      <p>description</p>
    </Article>
  );
};

export default NoteList;
