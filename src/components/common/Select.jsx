import styled from "styled-components";

const StyledSelect = styled.select`
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 0 10px;
  font-size: 16px;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Select = ({ onChange, value, children }) => {
  return (
    <StyledSelect onChange={onChange} value={value}>
      {children}
    </StyledSelect>
  );
};

export default Select;
