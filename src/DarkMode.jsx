import { useDispatch } from 'react-redux'
import React from 'react'
import { toggleDarkMode } from './reducers/darkModeSlice'

const DarkMode = () => {

  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(toggleDarkMode())}>DarkMode</button>
  )
}

export default DarkMode