import { useContext } from "react";
import { TasksContext } from "../context/taskContext";

import styled from "styled-components";
const StyledLI = styled.li`
  border-bottom: 1px solid #d5e1b7;
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

const TaskList = () => {
  const tasks = useContext(TasksContext);
  return (
    <div>
      <StyledUL>
        {tasks &&
          tasks.map((row) => <StyledLI key={row.id}>{row.name}</StyledLI>)}
      </StyledUL>
    </div>
  );
};

export default TaskList;
