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
  switch (action) {
    case "add": {
      return null;
    }

    case "update": {
      return null;
    }

    case "remove": {
      return null;
    }
    default:
      break;
  }
}

const initialTasks = [
  {
    id: 0,
    name: "zero",
    done: true,
  },
  {
    id: 1,
    name: "one",
    done: true,
  },
  {
    id: 2,
    name: "two",
    done: true,
  },
];
