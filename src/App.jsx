import styled from "styled-components";
import SearchSection from "./components/Search/SearchSection";
import NoteSection from "./components/note/NoteSection";
import HeaderSection from "./components/header/HeaderSection";
import ButtonSection from "./components/button/ButtonSection";

const Template = styled.div`
  width: 768px;
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
