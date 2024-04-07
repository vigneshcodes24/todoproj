import React, { useState } from "react";
import './App.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your task"
      />
      <button className="addbtn" onClick={handleAddTodo}>+</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className="delbtn" onClick={() => handleRemoveTodo(index)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
