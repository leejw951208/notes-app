import { useDispatch } from "react-redux";
import styled from "styled-components";
import { boardActions } from "../../store/board-slice";

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

const Button = ({
  backgroundColor,
  hoverBackgroundColor,
  color,
  name,
  onClick,
}) => {
  return (
    <StyledButton
      $backgroundColor={backgroundColor}
      $hoverBackgroundColor={hoverBackgroundColor}
      $color={color}
      onClick={onClick}
    >
      {name}
    </StyledButton>
  );
};

export default Button;
