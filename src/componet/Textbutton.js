import React, { useState } from 'react';
import './Testbutton.css'

function Textbutton() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (event) => {
    setCurrentTask(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setCurrentDescription(event.target.value);
  };

  const handleAddTask = () => {
    if (currentTask.trim() !== '') {
      if (editingIndex !== null) {
        const updatedTasks = [...todoList];
        updatedTasks[editingIndex] = { task: currentTask, description: currentDescription };
        setTodoList(updatedTasks);
        setEditingIndex(null);
      } else {
        setTodoList([...todoList, { task: currentTask, description: currentDescription }]);
      }
      setCurrentTask('');
      setCurrentDescription('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...todoList];
    updatedTasks.splice(index, 1);
    setTodoList(updatedTasks);
  };

  const handleEditTask = (index) => {
    const taskToEdit = todoList[index];
    setCurrentTask(taskToEdit.task);
    setCurrentDescription(taskToEdit.description);
    setEditingIndex(index);
  };

  return (
    <div className="List-item">
      <h1>Todo List App</h1>
      <div className='box'>
      <div className="task-input">
        <label>Title</label>
        <input className="input" type="text" value={currentTask} onChange={handleInputChange} placeholder="Enter a new task" />
      </div>
      <div className="task-input">
        <label>Description</label>
        <input type="text"  value={currentDescription} onChange={handleDescriptionChange} placeholder="Enter description" />
       
      </div>
      <div className="task-input">
      <button className="button" onClick={handleAddTask}>
      {editingIndex !== null ? 'Update Task' : 'Add Task'}
    </button></div>

    </div>
      <table className="task-list">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((task, index) => (
            <tr key={index}>
              <td>{task.task}</td>
              <td>{task.description}</td>
              <td>
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
                <button onClick={() => handleEditTask(index)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Textbutton;
