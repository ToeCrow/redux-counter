import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { increment, decrement, incrementByAmount } from './reducers/counterSlice'

function App() {
  const {count} = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>+ 33</button>
    </div>
  )
}

export default App
