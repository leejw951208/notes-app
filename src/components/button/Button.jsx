import styled from "styled-components";

const StyledButton = styled.button`
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$backgroundColor};
  border: none;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
`;

const Button = ({ backgroundColor, color, name }) => {
  return (
    <StyledButton $backgroundColor={backgroundColor} $color={color}>
      {name}
    </StyledButton>
  );
};

export default Button;
