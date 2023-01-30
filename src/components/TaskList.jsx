import { useContext } from "react";
import { TasksContext } from "../context/taskContext";
import Task from "./Task";

import styled from "styled-components";

const StyledUL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TaskList = () => {
  const tasks = useContext(TasksContext);
  return (
    <StyledUL>
      {tasks &&
        tasks.map((t) => <Task key={t.id} name={t.name} done={t.done} />)}
    </StyledUL>
  );
};

export default TaskList;
