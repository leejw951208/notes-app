import styled from "styled-components";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

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
      <Header />
      <Main />
    </Template>
  );
}

export default App;
