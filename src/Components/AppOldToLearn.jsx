import { useState, useRef, useReducer } from "react";
import AppTitle from "./Components/AppTitle";
import Input from "./Components/Input";
import Tasks from "./Components/Tasks";
import WelcomeMessage from "./Components/WelcomeMessage";
import { ToDoContext } from "./store/ToDoContext";

const reducer = (state, action) => {
  if(action.type === "NEW_ITEM"){
    
  }

};

function App() {
  // let [data, setData] = useState([]);

  let [data, dispatchItems] = useReducer(reducer, []);

  let taskName = useRef("");
  let dueDate = useRef("");
  let enteredTask = taskName.current.value;
  let enteredDate = dueDate.current.value;

  const handleClick = (event) => {
    let newItems = {
      type: "NEW_ITEM",
      payload: {
        enteredTask,
        enteredDate,
      },
    };

    dispatchItems(newItems);
    event.preventDefault();

    if (enteredTask !== "" && enteredDate !== "") {
      if (
        data.some(
          (item) => item.name === enteredTask && item.date === enteredDate
        )
      ) {
        alert("Task Already Exists");
      } else {
        setData(
          (currVal) => [{ name: enteredTask, date: enteredDate }, ...currVal]

          // or it could be written like this
          /*
          let dataEntered = {
            name: enteredTask,
            date: enteredDate,
          };

          let newArr = [dataEntered, ...currVal];

          return newArr;
          */
        );
        taskName.current.value = "";
        dueDate.current.value = "";
      }
    } else {
      alert("Cannot Enter Blank Values");
    }
  };

  const handleDelete = (name) => {
    let newArrAfterDel = data.filter((item) => item.name !== name);
    setData(newArrAfterDel);
  };

  // let [delete, setDelete] = useState(task)
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
      <div className="Container">
        <AppTitle />
        <Input />
        <WelcomeMessage />
        <Tasks />
      </div>
    </ToDoContext.Provider>
  );
}

export default App;
