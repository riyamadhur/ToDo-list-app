import React, { useState } from "react";
//import context
import { useValue } from "../TodoContext";
//import todos style
import styles from "./Todos.module.css";

export default function Todos() {
  const { todos, handleDelete, handleUpdate } = useValue();
  const [editableIndex, setEditableIndex] = useState(null);
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");

  //edit todos function
  function handleEditClick(index) {
    setEditableIndex(index);
    setTitle(todos[index].title);
    setUserId(todos[index].userId);
  }
  //editable todos function
  function handleSubmit(index) {
    handleUpdate(todos[index].id, userId, title);
    setEditableIndex(null);
    setTitle("");
    setUserId("");
  }

  return (
    <div className={styles.todosContainer}>
      {todos.map((todo, i) => {
        return (
          <div key={i}>
            <div>
              <input type="checkbox" />
              <span>{todo.title}</span>
            </div>
            <div>
              <span>ID: {todo.id}</span>
              <span>UserID: {todo.userId}</span>
              <button onClick={() => handleEditClick(i)}>Update</button>
              {editableIndex === i ? (
                <form onSubmit={() => handleSubmit(i)}>
                  <input
                    placeholder="Update title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <input
                    placeholder="Update UserId"
                    value={todo.userId}
                    type="hidden"
                  />
                  <button type="submit">Save</button>
                </form>
              ) : null}
              <button onClick={() => handleDelete(todo.id)} className={styles.delete}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
