import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  border-radius: 5px;
  background-color: #dfdfdf;
  flex: 2;
  padding: 0 10px;
  font-size: 16px;
`;

const Input = () => {
  return <StyledInput placeholder="Search" />;
};

export default Input;
