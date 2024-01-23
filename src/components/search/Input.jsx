import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  border-radius: 10px;
  background-color: #cfcfcf;
  flex: 2;
  padding: 0 10px;
  font-size: 16px;
  height: 50px;
  &:focus {
    background-color: #fff;
  }
`;

const Input = () => {
  return <StyledInput placeholder="Search" />;
};

export default Input;
