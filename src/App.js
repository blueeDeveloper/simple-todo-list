import "./App.css";
import { useState } from "react";
import FormComponent from "./components/FormComponent";
import ToDoListComponent from "./components/ToDoListComponent";

function App() {
  const todos = [
    { task: "Bring Groceries", completed: false },
    { task: "Finish React app", completed: false },
    { task: "Car Servicing", completed: false },
  ];
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState(todos);
  const changeValue = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let newTodo = tasks.slice();
    newTodo.splice(0, 0, { task: value, completed: false });
    setTasks(newTodo);
    setValue("");
  };

  const updateTasks = (type, index) => {
    let getTodo = tasks.slice();
    if (type === "completed") getTodo[index].completed = true;
    else if (type === "delete") {
      getTodo.splice(index, 1);
    }
    setTasks(getTodo);
  };

  return (
    <div className="App">
      <FormComponent
        value={value}
        changeValue={changeValue}
        onSubmit={onSubmit}
      />
      {tasks.map((task, index) => {
        return (
          <ToDoListComponent
            style={{ textAlign: "left" }}
            key={index}
            todo={task}
            completeTodo={() => updateTasks("completed", index)}
            deleteTodo={() => updateTasks("delete", index)}
          />
        );
      })}
    </div>
  );
}

export default App;
