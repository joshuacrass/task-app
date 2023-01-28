import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
