import { useState, useEffect } from 'react'
import './TodoList.css'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editValue, setEditValue] = useState('')
  
  // Load todos from session storage on initial render
  useEffect(() => {
    const storedTodos = sessionStorage.getItem('todos')
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [])
  
  // Save todos to session storage whenever they change
  useEffect(() => {
    sessionStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false
      }])
      setInputValue('')
    }
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  
  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }
  
  const startEditing = (todo) => {
    setEditingId(todo.id)
    setEditValue(todo.text)
  }
  
  const handleEdit = (e) => {
    e.preventDefault()
    if (editValue.trim()) {
      setTodos(todos.map(todo => 
        todo.id === editingId ? { ...todo, text: editValue.trim() } : todo
      ))
      setEditingId(null)
    }
  }
  
  const cancelEdit = () => {
    setEditingId(null)
  }

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button 
          type="submit" 
          className="add-button"
          disabled={!inputValue.trim()}
        >
          Add
        </button>
      </form>

      {todos.length === 0 ? (
        <p className="empty-message">No tasks yet! Add some tasks to get started.</p>
      ) : (
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              {editingId === todo.id ? (
                <form onSubmit={handleEdit} className="edit-form">
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="edit-input"
                    autoFocus
                  />
                  <div className="edit-buttons">
                    <button type="submit" className="save-button">Save</button>
                    <button type="button" onClick={cancelEdit} className="cancel-button">Cancel</button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="todo-content">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggleComplete(todo.id)}
                      className="todo-checkbox"
                    />
                    <span className={`todo-text ${todo.completed ? 'completed-text' : ''}`}>
                      {todo.text}
                    </span>
                  </div>
                  <div className="todo-actions">
                    <button 
                      onClick={() => startEditing(todo)}
                      className="edit-button"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(todo.id)}
                      className="delete-button"
                    >
                      Remove
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodoList
