import { useState } from "react";

import Todo from "./components/Todo/Todo";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>CRUD App</h1>
      <Todo />
    </div>
  );
}

export default App;
