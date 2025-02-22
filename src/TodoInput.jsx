import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './reducers/todoSlice'

const TodoInput = () => {
  const [newTodo, setNewTodo] = useState('');

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  }

  return (
    <div>
      <input type="text" onChange={(e) => setNewTodo(e.target.value)} value={newTodo}/>
      <button onClick={handleAddTodo}>Add</button>
    </div>
  )
}

export default TodoInput