import { useState } from "react";
import Item from "./components/Item";
import Add from "/images/add.svg";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    todo: "",
    isAdded: false
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  }
  function addTodo() {

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
            value={formData.todo}
          />
          <img className="w-10" src={Add} alt="" onClick={addTodo} />
        </div>
        {formData.isAdded && <div className="flex flex-col divide-y-2">
          <Item 
            todoText={formData.todo} 
          />
        </div>}
      </div>
    </>
  );
}

export default App;
