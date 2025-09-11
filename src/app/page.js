"use client";
import { useState } from "react";
import "./index.css";
import ShortUniqueId from "short-unique-id";

export default function Home() {
  const [state, setState] = useState();
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChangeAllButton = () => {
    setState("All");
  };

  const handleChangeAllButton1 = () => {
    setState("Active");
  };

  const handleChangeAllButton2 = () => {
    setState("Completed");
  };
  const handleChangeAllButton3 = () => {
    setState("x");
  };

  const uid = new ShortUniqueId();

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddButton = () => {
    const uidWithTimestamp = uid.stamp(32);
    setTodos([
      ...todos,
      { todos: inputValue, status: "Active", id: uidWithTimestamp },
    ]);
    setInputValue("");
  };
  console.log("this is state value", state);
  console.log("this is input value", inputValue);
  console.log("this is todos now", todos);

  return (
    <div className="container">
      <h1 className="header">To-Do List</h1>
      <div className="container1">
        <input
          placeholder="Add a new task..."
          onChange={handleInputValue}

        ></input>
        <button className="button1" onClick={handleAddButton}>
          Add
        </button>
      </div>
      <div className="container2">
        <button
          onClick={handleChangeAllButton}
          style={{
            backgroundColor: state === "All" ? "#3c82f6" : "#f9f9f9",
            color: state === "All" ? "#f9f9f9" : "#363636",
          }}
        >
          All
        </button>
        <button
          onClick={handleChangeAllButton1}
          style={{
            backgroundColor: state === "Active" ? "#3c82f6" : "#f9f9f9",
            color: state === "Active" ? "#f9f9f9" : "#363636",
          }}
        >
          Active
        </button>
        <button
          onClick={handleChangeAllButton2}
          style={{
            backgroundColor: state === "Completed" ? "#3c82f6" : "#f9f9f9",
            color: state === "Completed" ? "#f9f9f9" : "#363636",
          }}
        >
          Completed
        </button>
      </div>
      <div className="container3">
        {todos.map((todo) => {
          return (
            <div className="container2">
              <button 
                className="button3"
                onClick={handleChangeAllButton3}
                style={{
                  backgroundColor: state === "x" ? "#3c82f6" : "#f9f9f9",
                  color: state === "x" ? "#f9f9f9" : "white",
                }} 
              >
                x
              </button>
              {todo.todos}
              
            </div>
          );
        })}
      </div>  <button className="button4">Delete</button>

      <h2 className="header1">No tasks yet. Add one above!</h2>
      
      <div className="container5">
        <h3 className="header2">Powered by</h3>
        <button className="button2">Pinecone academy</button>
      </div>
    </div>
  );
}
