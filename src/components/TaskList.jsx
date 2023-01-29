import styled from "styled-components";

const StyledLI = styled.li`
  border-bottom: 1px solid grey;
  padding: 20px;
  &:last-child {
    border-bottom: none;
  }
`;

const StyledUL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TaskList = (props) => {
  const { data } = props;
  return (
    <div>
      <StyledUL>
        {data && data.map((row) => <StyledLI>{row.name}</StyledLI>)}
      </StyledUL>
    </div>
  );
};

export default TaskList;
