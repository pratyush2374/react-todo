import { createContext, useReducer, useRef } from "react";

export const ToDoContext = createContext([]);

const reducer = (state, action) => {
  if (action.type === "NEW_ITEM") {
    let enteredTask = action.payload.enteredTask;
    let enteredDate = action.payload.enteredDate;

    if (enteredTask !== "" && enteredDate !== "") {
      if (
        state.some(
          (item) => item.name === enteredTask && item.date === enteredDate
        )
      ) {
        alert("Task Already Exists");
        return state;
      } else {
        return [...state, { name: enteredTask, date: enteredDate }];
      }
    } else {
      alert("Cannot Enter Blank Values");
    }
  } else if (action.type === "DELETE_ITEM") {
    let toDelete = action.payload.name;
    return state.filter((item) => item.name !== toDelete);
  }

  return state;
};

const ToDoItemContextProvider = ({ children }) => {
  let [data, dispatchItems] = useReducer(reducer, []);

  let taskName = useRef("");
  let dueDate = useRef("");

  const handleClick = (event) => {
    event.preventDefault();
    let enteredTask = taskName.current.value;
    let enteredDate = dueDate.current.value;

    let newItems = {
      type: "NEW_ITEM",
      payload: {
        enteredTask,
        enteredDate,
      },
    };

    dispatchItems(newItems);
    taskName.current.value = "";
    dueDate.current.value = "";
  };

  const handleDelete = (name) => {
    let deleteItem = {
      type: "DELETE_ITEM",
      payload: {
        name,
      },
    };

    dispatchItems(deleteItem);
  };

  return (
    <ToDoContext.Provider
      value={{
        data: data,
        handleClick: handleClick,
        handleDelete: handleDelete,
        taskName: taskName,
        dueDate: dueDate,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoItemContextProvider;
