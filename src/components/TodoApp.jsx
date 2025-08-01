import React, { useState, useEffect } from 'react';
import './TodoApp.css';

function TodoApp() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("todoTasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === '') return;
    const newTask = { text: input, done: false };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="todo-container">
      <h1>📝 To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="What do you need to do?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, i) => (
          <li key={i} className={task.done ? "done" : ""}>
            <span onClick={() => toggleTask(i)}>{task.text}</span>
            <button className="delete-btn" onClick={() => deleteTask(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
