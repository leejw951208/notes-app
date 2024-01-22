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
        <p>Take notes and never forget.</p>
      </header>
      <main>
        <section>
          <input type="text" placeholder="Search" />
          <select>
            <option>Sort by last edited.</option>
            <option>Sort by recently edited.</option>
            <option>Sort by alphabetically</option>
          </select>
        </section>
        <section>
          <div>
            <h3>title</h3>
            <p>description</p>
          </div>
        </section>
        <section>
          <button>remove</button>
          <button>edit</button>
        </section>
      </main>
    </Template>
  );
}

export default App;
