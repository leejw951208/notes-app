import styled from "styled-components";
import Button from "./Button";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ButtonSection = () => {
  return (
    <Section>
      <Button backgroundColor={"#E53B48"} color={"white"} name={"Remove"} />
      <Button
        backgroundColor={"#2C61F0"}
        color={"white"}
        name={"Create Note"}
      />
    </Section>
  );
};

export default ButtonSection;
