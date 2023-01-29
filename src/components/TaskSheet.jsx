import styled from "styled-components";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const StyledTaskSheet = styled.div`
  width: 500px;
  background-color: #ece63d;
`;
const TaskSheet = () => {
  return (
    <StyledTaskSheet>
      <TaskForm />
      <TaskList
        data={[
          { id: 0, name: "joshua" },
          { id: 1, name: "james" },
        ]}
      />
    </StyledTaskSheet>
  );
};

export default TaskSheet;
