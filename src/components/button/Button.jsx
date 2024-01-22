import styled from "styled-components";

const StyledButton = styled.button`
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$backgroundColor};
  border: none;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.$hoverBackgroundColor};
  }
`;

const Button = ({ backgroundColor, hoverBackgroundColor, color, name }) => {
  return (
    <StyledButton
      $backgroundColor={backgroundColor}
      $hoverBackgroundColor={hoverBackgroundColor}
      $color={color}
    >
      {name}
    </StyledButton>
  );
};

export default Button;
