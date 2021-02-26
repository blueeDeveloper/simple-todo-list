import { Button } from "react-bootstrap";

const ToDoListComponent = (props) => {
  const { todo, completeTodo, deleteTodo } = props;
  return (
    <>
      <ul>
        <li
          style={{
            textAlign: "left",
            textDecoration: todo.completed ? "line-through" : "",
          }}
        >
          {todo.task}
          <Button
            disabled={todo.completed === true}
            onClick={completeTodo}
            style={{ marginLeft: 10 }}
            variant="primary"
          >
            Completed
          </Button>
          <Button
            onClick={deleteTodo}
            style={{ marginLeft: 10 }}
            variant="primary"
          >
            Delete
          </Button>
        </li>
      </ul>
    </>
  );
};
export default ToDoListComponent;
