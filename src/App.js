import Header from "./components/Header";
import TaskSheet from "./components/TaskSheet";

import styled from "styled-components";
const StyledApp = styled.div`
  display: grid;
  grid-template-rows: 100px auto;
  justify-content: center;
`;

function App() {
  return (
    <StyledApp>
      <Header />
      <TaskSheet />
    </StyledApp>
  );
}

export default App;
