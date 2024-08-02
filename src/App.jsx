import { useEffect, useState } from "react";
import Item from "./components/Item";
import Add from "/images/add.svg";
import "./App.css";

function App() {
  // const [todos, setTodos] = useState({
  //   todo: "",
  //   isAdded: false
  // });
  const [todos, setTodos] = useState(()=> {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : []
  });

  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]); 

  function handleChange(event) {
    const { name, value } = event.target;
    setTodos((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(todos);
  }
  function addTodo(text) {
    const newTodo = {id: Date.now(), text, completed: false};
    setTodos([...todos, newTodo])
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-9xl text-gray-300 font-extrabold pt-10 pb-8">
          todos
        </h1>
        <div className="flex justify-between pb-10">
          <input
            className="w-[40rem] px-3 py-5 border shadow-xl text-2xl rounded-2xl"
            type="text"
            placeholder="Add a todo item..."
            name="todo"
            onChange={handleChange}
            value={todos.todo}
          />
          <img className="w-10" src={Add} alt="" onClick={addTodo} />
        </div>
        {todos.isAdded && <div className="flex flex-col divide-y-2">
          <Item 
            todoText={todos.todo} 
          />
        </div>}
      </div>
    </>
  );
}

export default App;
