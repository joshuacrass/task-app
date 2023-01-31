import Input from "./Input";
import Button from "./Button";

import { useState, useContext, useRef } from "react";
import { TasksDispatchContext } from "../context/taskContext";

import styled from "styled-components";
const StyledTaskForm = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid grey;
`;

const TaskForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useContext(TasksDispatchContext);
  const inputRef = useRef(null);

  // update state as use type in the input field
  function handleInputChange(value) {
    setTask(value);
  }

  // add the new task
  function handleButtonClick(action) {
    dispatch({
      type: action,
      name: task,
    });
    // clear the form by updating state
    setTask("");
    // reset focus to the input
    inputRef.current.focus();
  }

  return (
    <StyledTaskForm>
      <Input
        ref={inputRef}
        type="text"
        value={task}
        change={handleInputChange}
      />
      <Button text="Add" click={handleButtonClick} action="add" />
    </StyledTaskForm>
  );
};

export default TaskForm;
