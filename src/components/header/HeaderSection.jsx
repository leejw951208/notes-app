import styled from "styled-components";

const Section = styled.section`
  margin-top: 50px;
  > h1 {
    font-size: 35px;
  }
`;

const HeaderSection = () => {
  return (
    <Section>
      <h1>Notes App</h1>
      <p>Take notes and never forget.</p>
    </Section>
  );
};

export default HeaderSection;
