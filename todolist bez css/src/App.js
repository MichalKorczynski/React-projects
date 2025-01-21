import { useState } from "react";
import './App.css';
import Task from "./Task";


function App() {

  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const update = (event) => {
    setNewTask(event.target.value);
  }
  
  const add = () => {
    const ex = {
      id: task.length === 0 ? 1 : task[task.length-1].id+1,
      taskName: newTask,
      isDone: false,
    }
    setTask([...task, ex]);
    document.getElementById("inp").value = null;
  }

  const remove = (id) => {
    setTask(task.filter((element2) => {
      return element2.id !== id;
    }));
  }

  
  const complete = (id) => {
    setTask(task.map((assigment) => {
      if (assigment.id === id && assigment.isDone === false) {
        return {...assigment, isDone: true };
      }
      else {
        return {...assigment, isDone: false};
      }
    }))
  }
  return (
    <>
      <input id="inp" onChange={update}/>
      <button onClick={add}>ADD</button>

      {task.map((element) => {
        return <Task taskName={element.taskName} completed={element.isDone} id={element.id} deleteTask={remove} completeTask={complete} />
      })

      }
  </>
  )
}
export default App;
