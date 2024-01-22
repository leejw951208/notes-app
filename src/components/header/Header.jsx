import styled from "styled-components";

const Header = styled.header`
  margin-top: 50px;
  > h1 {
    font-size: 35px;
  }
`;

const HeaderSection = () => {
  return (
    <Header>
      <h1>Notes App</h1>
      <p>Take notes and never forget.</p>
    </Header>
  );
};

export default HeaderSection;
