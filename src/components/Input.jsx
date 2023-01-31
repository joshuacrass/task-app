import { forwardRef } from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  border-bottom: 1px solid red;

  &:focus-within {
    border-bottom: 2px solid red;
  }

  input {
    font-size: 2rem;
    background-color: inherit;
    border: 0;
    padding: 5px;
    outline: none;
  }
`;

const Input = forwardRef((props, ref) => {
  const { type, value, change } = props;

  return (
    <StyledInput>
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={(e) => change(e.target.value)}
      />
    </StyledInput>
  );
});

export default Input;
