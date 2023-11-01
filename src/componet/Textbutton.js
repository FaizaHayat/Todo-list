import React, { useState } from 'react';

function Textbutton() {


  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  
  const handleInputChange = (event) => {
    setCurrentTask(event.target.value);
  };

  const handleAddTask = () => {
    if (currentTask.trim() !== '') {
      setTodoList([...todoList, currentTask]);
      setCurrentTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = todoList.filter((_, i) => i !== index);
    setTodoList(updatedTasks);
  };

  return (
    <div className="List-item">
      <h1>Todo List App</h1>
      <div className="task-input">
        <input type="text" value={currentTask} onChange={handleInputChange} placeholder="Enter a new task" />
        <button className="button" onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-list">
        {todoList.map((task, index) => (
          <div key={index} className="task">
            <p>{task}</p>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Textbutton;
