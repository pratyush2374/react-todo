import { useContext } from "react";
import { ToDoContext } from "../store/ToDoContext";

function Input() {
  let {handleClick, taskName, dueDate} = useContext(ToDoContext);

  return (
    <form className="row" onSubmit={handleClick}>
      <div className="col-2 p-row">
        <input
          type="text"
          name="Todo"
          id="Todo"
          placeholder="Enter task"
          required
          ref={taskName}
        />
      </div>

      <div className="col-2 p-row">
        <input type="date" name="Date" id="Date" required ref={dueDate} />
      </div>

      <div className="col-2 p-row">
        <button type="submit" className="btn btn-success">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default Input;
