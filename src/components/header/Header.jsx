import styled from "styled-components";

const StyledHeader = styled.header`
  margin-top: 50px;
  > h1 {
    font-size: 35px;
    word-break: keep-all;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Notes App</h1>
      <p>Take notes and never forget.</p>
    </StyledHeader>
  );
};

export default Header;
