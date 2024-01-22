import styled from "styled-components";
import NoteList from "./NoteList";

const Section = styled.section`
  margin-top: 30px;
`;

const NoteSection = () => {
  return (
    <Section>
      <NoteList />
      <NoteList />
      <NoteList />
      <NoteList />
    </Section>
  );
};

export default NoteSection;
