import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import { useState, useContext } from "react";

import { TasksDispatchContext } from "../context/taskContext";

const StyledTaskForm = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  border-bottom: 1px solid grey;
`;

const TaskForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useContext(TasksDispatchContext);

  function handleInputChange(value) {
    setTask(value);
  }

  function handleButtonClick(action) {
    dispatch({
      type: action,
      name: task,
    });
  }

  return (
    <StyledTaskForm>
      <Input type="text" value={task} change={handleInputChange} />
      <Button text="Add" click={handleButtonClick} action="add" />
    </StyledTaskForm>
  );
};

export default TaskForm;
