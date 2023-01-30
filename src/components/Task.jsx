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
  const { done, name } = props;
  return (
    <StyledLI>
      <div>
        {/* onclick update state */}
        <input type="checkbox" name="done" checked={done} />
      </div>
      <div>{name}</div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </StyledLI>
  );
};

export default Task;
