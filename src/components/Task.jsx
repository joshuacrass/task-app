import { useContext } from "react";
import { TasksDispatchContext } from "../context/taskContext";

import Button from "./Button";

import styled from "styled-components";
const StyledLI = styled.li`
  display: grid;
  grid-template-columns: 2fr 4fr 2fr;
  border-bottom: 1px solid #d5e1b7;
  padding: 20px;
  &:last-child {
    border-bottom: none;
  }
`;

const Task = (props) => {
  const { done, id, name } = props;
  const dispatch = useContext(TasksDispatchContext);

  function handleButtonClick(action) {
    dispatch({
      id,
      type: action,
    });
  }

  return (
    <StyledLI>
      <div>
        {/* onclick update state */}
        <input type="checkbox" name="done" defaultChecked={done} />
      </div>
      <div>{name}</div>
      <div>
        <Button text="Update" click={handleButtonClick} action="update" />
        <Button text="Delete" click={handleButtonClick} action="remove" />
      </div>
    </StyledLI>
  );
};

export default Task;
