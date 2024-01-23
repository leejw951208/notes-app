import styled from "styled-components";
import HeaderSection from "./components/header/Header";
import MainSection from "./components/MainSection";

const Template = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e7e7e7;
  border-radius: 1rem;
  background-color: #e5e5e5;
  padding: 20px;
  width: 1280px;
  gap: 30px;
`;

function App() {
  return (
    <Template>
      <HeaderSection />
      <MainSection />
    </Template>
  );
}

export default App;
