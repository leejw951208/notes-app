import styled from "styled-components";
import Input from "../common/Input";
import Select from "../common/Select";
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
  const { keyword, sort } = useSelector((state) => state.search);

  const handleKeywordChange = (e) => {
    dispatch(searchActions.setKeyword(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(searchActions.setSort(e.target.value));
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
        <Select onChange={handleSortChange} value={sort}>
          <option value="modified">Sort by last edited.</option>
          <option value="created">Sort by recently edited.</option>
          <option value="alphabet">Sort by alphabetically</option>
        </Select>
      </Div>
    </Section>
  );
};

export default SearchSection;
