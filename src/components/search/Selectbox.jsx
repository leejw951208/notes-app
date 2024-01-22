import styled from "styled-components";

const StyledSelectbox = styled.select`
  flex: 1;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 0 10px;
  font-size: 16px;
  cursor: pointer;
`;

const Selectbox = ({ children }) => {
  return <StyledSelectbox>{children}</StyledSelectbox>;
};

export default Selectbox;
