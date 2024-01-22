import styled from "styled-components";

const Template = styled.div`
  width: 768px;
  border: 1px solid #ececec;
  border-radius: 1rem;
  background-color: #ececec;
  padding: 20px;
`;

function App() {
  return (
    <Template>
      <header>
        <h2>Notes App</h2>
      </header>
    </Template>
  );
}

export default App;
