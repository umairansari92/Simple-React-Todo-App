import React, { useState } from "react";
import styles from "./TodoApp.module.css";
import ButtonCmp from "./ButtonCmp";
import TextField from "./textfield";

const TodoApp = () => {
  const [todoValue, setTodoValue] = useState("");
  const [editInputValue, setEditInputValue] = useState("");

  const [todos, settodos] = useState([]);

  const addtodo = () => {
    if (todoValue.length < 4) {
      alert("Please enter a valid todo");
      return;
    }
    todos.unshift(todoValue);
    settodos([...todos]);
    setTodoValue("");
  };

  const deleteAll = () => {
    settodos([]);
  };

  const deleteTodo = (index) => {
    todos.splice(index, 1);
    settodos([...todos]);
  };

  const editTodo = (index) => {
    const editValue = prompt("Enter the value");
    todos.splice(index, 1, editValue);
    settodos([...todos]);
  };

  const [editIndexNumber, setEditIndexNumber] = useState(null);
  const editHandler = (indexNumber) => {
    setEditIndexNumber(indexNumber);
  };
  const saveHandler = (indexNumber) => {
    console.log("editInputValue", editInputValue);
    todos.splice(indexNumber, 1, editInputValue);
    settodos([...todos]);
    setEditIndexNumber(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Todo App</h1>
      <div className={styles.header}>
        <TextField
          placeholder="Enter todos..."
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
        />
        <ButtonCmp title="Add Todo" onClick={addtodo} />
        <ButtonCmp
          title="Delete All"
          style={{ backgroundColor: "linen" }}
          onClick={deleteAll}
        />
      </div>
      {/* listing */}
      <div>
        <ul className={styles.list}>
          {todos.map((value, index) => {
            console.log("value", value);
            return editIndexNumber === index ? (
              <div className="edit">
                <TextField
                  placeholder="Edit Value..."
                  onChange={(e) => setEditInputValue(e.target.value)}
                  value={editInputValue}
                />
                <ButtonCmp title={"Save"} onClick={() => saveHandler(index)} />
              </div>
            ) : (
              <li key={index}>
                <p>{value}</p>
                <div className={styles.actions}>
                  <ButtonCmp onClick={() => editHandler(index)} title="Edit" />
                  <ButtonCmp
                    title="Delete"
                    style={{ backgroundColor: "linen" }}
                    onClick={() => deleteTodo(index)}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
