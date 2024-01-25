import styled from "styled-components";
import Input from "../common/Input";
import Selectbox from "../common/Selectbox";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../../store/search-slice";

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
  const dispatch = useDispatch();
  const { keyword } = useSelector((state) => state.search);

  const handleKeywordChange = (e) => {
    dispatch(searchActions.setKeyword(e.target.value));
  };

  return (
    <Section>
      <Div $flexGrow="2">
        <Input
          type="text"
          placeholder="Search"
          backGroundColor="#cfcfcf"
          value={keyword}
          onChange={handleKeywordChange}
        />
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
