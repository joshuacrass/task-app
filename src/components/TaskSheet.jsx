import styled from "styled-components";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const StyledTaskSheet = styled.div`
  width: 500px;
  background-color: #fdffb6;
`;

const TaskSheet = () => {
  return (
    <StyledTaskSheet>
      <TaskForm />
      <TaskList />
    </StyledTaskSheet>
  );
};

export default TaskSheet;
