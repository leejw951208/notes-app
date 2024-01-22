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
      <h1>Studies App (공사중... 🚧)</h1>
      <p>Recording my studies</p>
    </Header>
  );
};

export default HeaderSection;
