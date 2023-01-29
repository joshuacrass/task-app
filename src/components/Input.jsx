import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 2rem;
`;
const Input = (props) => {
  const { type } = props;
  return <StyledInput type={type} />;
};

export default Input;
