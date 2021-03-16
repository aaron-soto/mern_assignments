import React, { useState } from "react";

const TaskForm = (props) => {
  const [newTask, setNewTask] = useState({
    text: "",
    completed: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewTask(newTask);
    e.target.children[1].value = "";
  };

  const updateTask = (e) => {
    setNewTask({
      text: e.target.value,
      completed: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Task:</label>
      <input type="text" onChange={updateTask} />
      <button type="submit" className="btn btn-dark">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
