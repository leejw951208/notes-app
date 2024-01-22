import styled from "styled-components";
import SearchSection from "./components/search/SearchSection";
import NoteSection from "./components/note/NoteSection";
import ButtonSection from "./components/button/ButtonSection";
import HeaderSection from "./components/header/Header";

const Template = styled.div`
  width: 1280px;
  border: 1px solid #f0f0f0;
  border-radius: 1rem;
  background-color: #f0f0f0;
  padding: 20px;
`;

function App() {
  return (
    <Template>
      <HeaderSection />
      <main>
        <SearchSection />
        <NoteSection />
        <ButtonSection />
      </main>
    </Template>
  );
}

export default App;
