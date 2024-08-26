import AppTitle from "./Components/AppTitle";
import Input from "./Components/Input";
import Tasks from "./Components/Tasks";
import WelcomeMessage from "./Components/WelcomeMessage";
import ToDoItemContextProvider, { ToDoContext } from "./store/ToDoContext";

function App() {
  // let [delete, setDelete] = useState(task)
  return (
    <ToDoItemContextProvider>
      <div className="Container">
        <AppTitle />
        <Input />
        <WelcomeMessage />
        <Tasks />
      </div>
      </ToDoItemContextProvider>
  );
}


export default App;
