import styled from "styled-components";

const StyledButton = styled.button`
  background-color: grey;
`;

const Button = (props) => {
  const { text, click, action } = props;

  return <StyledButton onClick={() => click(action)}>{text}</StyledButton>;
};

export default Button;
