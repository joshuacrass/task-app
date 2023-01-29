import styled from "styled-components";

const StyledLI = styled.li`
  border-bottom: 1px solid #d5e1b7;
  padding: 20px;
  &:last-child {
    border-bottom: none;
  }
`;

const Task = (props) => {
  const { name } = props;
  return <StyledLI>{name}</StyledLI>;
};

export default Task;
