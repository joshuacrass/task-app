import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";

const StyledTaskForm = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  border-bottom: 1px solid grey;
`;

const TaskForm = () => {
  return (
    <StyledTaskForm>
      <Input type="text" />
      <Button text="Add" />
    </StyledTaskForm>
  );
};

export default TaskForm;
