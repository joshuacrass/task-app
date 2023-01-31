import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 2rem;
`;
const Input = (props) => {
  const { type, value, change } = props;

  return (
    <StyledInput
      type={type}
      value={value}
      onChange={(e) => change(e.target.value)}
    />
  );
};

export default Input;
