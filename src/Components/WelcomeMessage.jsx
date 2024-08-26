import { useContext } from "react";
import { ToDoContext } from "../store/ToDoContext";

const WelcomeMessage = () => {

    let contextObject = useContext(ToDoContext);
    let data = contextObject.data;
    return (
        <>
            {data.length === 0 ? <p>Wohoo! No Tasks Due</p> : null}
        </>
    )
}

export default WelcomeMessage;