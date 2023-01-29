import styled from "styled-components";

const StyledButton = styled.button`
  background-color: grey;
`;
const Button = (props) => {
  const { text } = props;
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
