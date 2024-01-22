import styled from "styled-components";
import Input from "./Input";
import Selectbox from "./Selectbox";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  height: 35px;
  gap: 5px;
  margin-top: 20px;
`;

const SearchSection = () => {
  return (
    <Section>
      <Input />
      <Selectbox>
        <option>Sort by last edited.</option>
        <option>Sort by recently edited.</option>
        <option>Sort by alphabetically</option>
      </Selectbox>
    </Section>
  );
};

export default SearchSection;