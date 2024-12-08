import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list-container">
      <h2>Task List</h2>
      {tasks.length > 0 ? (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              {task}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-tasks-message">No tasks available. Add a task to get started!</p>
      )}
    </div>
  );
};

export default TaskList;