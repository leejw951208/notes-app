import styled from "styled-components";
import Input from "../common/Input";
import Selectbox from "../common/Selectbox";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Div = styled.div`
  flex: ${(props) => props.$flexGrow};
  height: 50px;
`;

const SearchSection = () => {
  return (
    <Section>
      <Div $flexGrow="2">
        <Input type="text" placeholder="Search" backGroundColor="#cfcfcf" />
      </Div>
      <Div $flexGrow="1">
        <Selectbox>
          <option>Sort by last edited.</option>
          <option>Sort by recently edited.</option>
          <option>Sort by alphabetically</option>
        </Selectbox>
      </Div>
    </Section>
  );
};

export default SearchSection;
