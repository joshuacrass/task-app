import { forwardRef } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 2rem;
`;

const Input = forwardRef((props, ref) => {
  const { type, value, change } = props;

  return (
    <StyledInput
      ref={ref}
      type={type}
      value={value}
      onChange={(e) => change(e.target.value)}
    />
  );
});

export default Input;
