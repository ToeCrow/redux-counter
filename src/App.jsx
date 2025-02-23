import { useSelector } from "react-redux";
import DarkMode from "./DarkMode";
import CounterApp from "./counterApp";
import TodoApp from "./TodoApp";

function App() {
  const isDarkMode = useSelector((state) => state.dark.value);

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <header>
        <h1>Redux</h1>
        <DarkMode />
      </header>
      <main>
        <CounterApp />
        <TodoApp />
      </main>
    </div>
  );
}

export default App;
