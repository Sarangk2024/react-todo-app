import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleCompleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>📝 To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="What do you need to do?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleCompleteTask(index)}>
              {task.text}
            </span>
            <div className="actions">
              <button
                className="complete"
                onClick={() => toggleCompleteTask(index)}
                title="Mark Complete"
              >
                {task.completed ? '↩️' : '✅'}
              </button>
              <button
                className="delete"
                onClick={() => handleDeleteTask(index)}
                title="Delete Task"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
