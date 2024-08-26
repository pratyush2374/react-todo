import { useContext } from "react";
import Rows from "./Rows";
import { ToDoContext } from "../store/ToDoContext";

function Tasks() {
  let { data } = useContext(ToDoContext);

  return (
    <div className="row">
      {data.map((item) => (
        <div key={item.name}>
          <Rows name={item.name} date={item.date}></Rows>
        </div>
      ))}
    </div>
  );
}

export default Tasks;

// (event) => handleDelete(event, item.name, item.date)
