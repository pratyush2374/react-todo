import React from "react";
import { useContext } from "react";
import { ToDoContext } from "../store/ToDoContext";

function Rows({ name, date }) {
  
  let { handleDelete } = useContext(ToDoContext);

  return (
    <>
      <div className="divRow">
        <div className="col-2 p-row">{name}</div>
        <div className="col-2 p-row">{date}</div>
        <div className="col-2 p-row">
          <button
            type="button"
            className="btn btn-danger"
            onClick={(event) => handleDelete(name)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Rows;
