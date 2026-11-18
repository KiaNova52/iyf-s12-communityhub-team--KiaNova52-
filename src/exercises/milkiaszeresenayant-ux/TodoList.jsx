import { useState } from 'react'
import { Button } from '../../components/shared/Button.jsx'

const startingTodos = [
  { id: 1, text: 'Learn React components', completed: true },
  { id: 2, text: 'Build something small', completed: false },
]

export function TodoList() {
  const [todos, setTodos] = useState(startingTodos)
  const [inputValue, setInputValue] = useState('')

  function handleAdd(event) {
    event.preventDefault()
    const text = inputValue.trim()
    if (!text) return

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: Date.now(), text, completed: false },
    ])
    setInputValue('')
  }

  function handleToggle(todoId) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  function handleDelete(todoId) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== todoId),
    )
  }

  return (
    <div className="todo-demo">
      <form className="todo-form" onSubmit={handleAdd}>
        <label className="visually-hidden" htmlFor="todo-input">New to-do</label>
        <input
          id="todo-input"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Add a small next step"
        />
        <Button type="submit" size="small">Add</Button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <button
              className={`todo-toggle ${todo.completed ? 'is-complete' : ''}`}
              type="button"
              aria-pressed={todo.completed}
              onClick={() => handleToggle(todo.id)}
            >
              <span className="todo-checkbox" aria-hidden="true">{todo.completed ? '✓' : ''}</span>
              {todo.text}
            </button>
            <Button variant="quiet" size="small" onClick={() => handleDelete(todo.id)}>Remove</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
