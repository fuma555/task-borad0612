import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => {
    if (!input.trim()) return
    setTasks(prev => [...prev, { id: Date.now(), text: input.trim(), done: false }])
    setInput('')
  }

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const doneCount = tasks.filter(t => t.done).length

  return (
    <div className="board">
      <h1 className="board-title">📋 Task Board</h1>

      <div className="input-row">
        <input
          className="task-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTask()}
          placeholder="タスクを入力して Enter または 追加ボタン..."
        />
        <button className="add-btn" onClick={addTask}>追加</button>
      </div>

      {tasks.length === 0 ? (
        <p className="empty-message">タスクはありません。上から追加してください。</p>
      ) : (
        <>
          <p className="task-count">{doneCount} / {tasks.length} 完了</p>
          <ul className="task-list">
            {tasks.map(task => (
              <li key={task.id} className={`task-item${task.done ? ' done' : ''}`}>
                <input
                  type="checkbox"
                  className="task-checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                />
                <span className="task-text">{task.text}</span>
                <button className="delete-btn" onClick={() => deleteTask(task.id)}>✕</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default App
