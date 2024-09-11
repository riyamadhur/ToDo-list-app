import { createContext, useContext, useState, useEffect } from "react";
//create context
const TodoContexts = createContext();

//use custom hook
const useValue = () => {
  const value = useContext(TodoContexts);
  return value;
};
//cusom provider
function TodoContext({ children }) {
  const [todos, setTodos] = useState([]);

  //*************************************Render the API****************************
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
      });
  }, []);

  //*******************************************Delete the todo*******************************
  function handleDelete(id) {
    // Filter out the todo with the given id and update the state
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    alert("Deleted successfully");

  }

  //*******************************************Update the todo*******************************
  function handleUpdate(id, UserId, title) {
    // Find the todo with the given id and update UserId and title
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, UserId, title } : todo
      )
    );
    alert("Updated successfully");
  }
  // ****************************************add new todo **************************************
function handleAdd(id, userId, title) {
  // Create a new todo object with the provided id, userId, and title
  const newTodo = {
    id,
    userId,
    title,
  };

  // Update the todos state by adding the newTodo to the existing todos array
  setTodos((prevTodos) => [...prevTodos, newTodo]);
  alert("New TODO added successfully");

}


  return (
    <TodoContexts.Provider value={{ todos, handleDelete, handleUpdate,handleAdd }}>
      {children}
    </TodoContexts.Provider>
  );
}

export { useValue };
export default TodoContext;
