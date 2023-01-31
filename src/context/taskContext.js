import { createContext, useReducer } from "react";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

function taskReducer(tasks, action) {
  switch (action.type) {
    case "add": {
      // TODO generate next id
      return [
        ...tasks,
        { id: tasks.length + 1, name: action.name, done: false },
      ];
    }

    case "update": {
      console.log("Updated:", action.id);
      return [...tasks];
    }

    case "remove": {
      console.log("removed");
      return [...tasks.filter((t) => t.id !== action.id)];
    }
    default:
      break;
  }
}

const initialTasks = [];
