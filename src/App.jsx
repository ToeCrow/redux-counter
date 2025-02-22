import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from 'react'
import './App.css'
import { increment, decrement, incrementByAmount, double, save, reset, addSaved } from './reducers/counterSlice'

function App() {
  const { count, savedCount } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [showSavedCount, setShowSavedCount] = useState(false);

  useEffect(() => {
    if (savedCount !== 0) {
      setShowSavedCount(true);
      const timer = setTimeout(() => setShowSavedCount(false), 3000);

      return () => clearTimeout(timer);
    }
  }, [savedCount]);

  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>+ 33</button>
      <button onClick={() => dispatch(double())}>x2</button>
      <button onClick={() => dispatch(save())}>save</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(addSaved())}>add saved</button>
      <AnimatePresence>
        {showSavedCount && (
          <motion.h2
            initial={{ opacity: 0, rotate: 0, x: 0 }} // Börja utan snurr eller förflyttning
            animate={{ opacity: 1, rotate: 0, x: 0 }} // Visa elementet utan snurr
            exit={{
              opacity: 0,
              rotate: 1800,  // Snurra 1800 grader (5 hela varv)
              x: 300,       // Flytta det ut ur skärmen horisontellt
              transition: { duration: 1 }, // Tidsinställning för snurren
            }}
          >
            Saved count: {savedCount}
          </motion.h2>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
