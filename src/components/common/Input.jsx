import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.$backGroundColor};
  padding: 0 10px;
  font-size: 16px;
  width: 100%;
  height: 100%;
  /* &:focus {
    background-color: #fff;
  } */
`;

const Input = ({ type, placeholder, backGroundColor }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      $backGroundColor={backGroundColor}
    />
  );
};

export default Input;
