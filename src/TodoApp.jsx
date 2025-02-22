import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TodoInput from './TodoInput'
import { removeTodo } from './reducers/todoSlice'


const TodoApp = () => {

  const todos = useSelector(state => state.todo.todos)

  const dispatch = useDispatch();
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  }

  return (
    <div className='Todo'>
      <h1>Shitodo</h1>
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.task}
          <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
        </div>
      ))}
      <TodoInput />
    </div>
  )
}

export default TodoApp