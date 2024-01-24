import { useDispatch } from "react-redux";
import styled from "styled-components";
import { boardActions } from "../../store/board-slice";

const StyledButton = styled.button`
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$backGroundColor};
  border: none;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.$hoverBackGroundColor};
  }
  &:disabled {
    background-color: #bbbbbb;
    color: #8e8e8e;
  }
`;

const Button = ({
  backGroundColor,
  hoverBackGroundColor,
  color,
  name,
  onClick,
  isActive = true,
}) => {
  return (
    <StyledButton
      $backGroundColor={backGroundColor}
      $hoverBackGroundColor={hoverBackGroundColor}
      $color={color}
      onClick={onClick}
      disabled={!isActive}
    >
      {name}
    </StyledButton>
  );
};

export default Button;
