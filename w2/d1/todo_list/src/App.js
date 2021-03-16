import "./App.css";
import ToDo from "./components/Todo";
import TaskForm from "./components/TaskForm";
import React, { useState, useEffect } from "react";

function App() {
  const initTasks = [
    { text: "Get Python Red Belt", completed: true },
    { text: "Get Python Black Belt", completed: true },
    { text: "Get MERN Black Belt", completed: false },
    { text: "Turn into checklist", completed: false },
    { text: "Add remove button", completed: false },
  ];

  const [tasks, setTasks] = useState([...initTasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <TaskForm onNewTask={addTask} />
      <ToDo tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
