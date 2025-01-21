import './App.css';
import { useState } from 'react';
import Search from './components/search';
import Add from './components/add';

function App() {
  const todos = [
    "Go to the market",
    "Buy food",
    "Cook dinner",
    "Learn JavaScript",
    "Learn React"
  ];

  const [todo, setTodo] = useState(todos);
  const [search, setSearch] = useState("");
  
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div id="main">
        <h2 class="title">ToDo</h2>

        <div id="mar">

          {/*Wyszukiwanie + lista*/}
          <Search todo={todo} setTodo={setTodo} />

          {/*Dodawanie nowych zadań*/}
          <Add todo={todo} setTodo={setTodo} />

        </div>
      </div>
    </>

  );
}

export default App;
