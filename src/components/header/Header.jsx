import styled from "styled-components";

const StyledHeader = styled.header`
  margin-top: 50px;
  > h1 {
    font-size: 35px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Studies App (공사중... 🚧)</h1>
      <p>Recording my studies</p>
    </StyledHeader>
  );
};

export default Header;
