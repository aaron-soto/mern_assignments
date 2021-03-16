import React from "react";
import styles from "./Todo.module.css";

const ToDo = (props) => {
  const toggleComplete = (taskIdx) => {
    // const tasksCopy = [...props.tasks]
    props.tasks[taskIdx].completed = !props.tasks[taskIdx].completed;
    props.setTasks([...props.tasks]);
  };

  const deleteTask = (taskIdx) => {
    props.tasks.splice(taskIdx, 1);
    props.setTasks([...props.tasks]);
  };

  const tasksHtml = props.tasks.map((task, idx) => {
    return (
      <div className={styles.task} key={idx}>
        {task.completed ? (
          <p>
            <del>{task.text}</del>
          </p>
        ) : (
          <p>{task.text}</p>
        )}
        <div className={styles.buttonGroup}>
          <input
            type="checkbox"
            checked={task.completed}
            className={styles.checkInput}
            onChange={(e) => toggleComplete(idx)}
          />
          <button
            onClick={(e) => {
              deleteTask(idx);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.taskTable}>
      <div>{tasksHtml}</div>
    </div>
  );
};

export default ToDo;
