import { useState } from 'react'
import './App.css'
function App() {
  const [todo, setTodo] = useState([])
  cosnt [newTodo, setNewTodo] = useState('')

  return (
    <>
      <input  type="text"/>
      <button>Добавить заметку</button>
    </>
  )
}

export default App
