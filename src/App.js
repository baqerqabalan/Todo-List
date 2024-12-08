import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Task Manager</h1>
      </header>
      <main>
        <AddTask onAddTask={addTask} />
        <button className="delete-all-button" onClick={deleteAllTasks}>
          Delete All Tasks
        </button>
        <TaskList tasks={tasks} />
      </main>
    </div>
  );
};

export default App;