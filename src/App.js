import Header from "./components/Header";
import TaskSheet from "./components/TaskSheet";
import { TaskProvider } from "./context/taskContext";

import styled from "styled-components";
const StyledApp = styled.div`
  display: grid;
  grid-template-rows: 100px auto;
  justify-content: center;
`;

function App() {
  return (
    <TaskProvider>
      <StyledApp>
        <Header />
        <TaskSheet />
      </StyledApp>
    </TaskProvider>
  );
}

export default App;
