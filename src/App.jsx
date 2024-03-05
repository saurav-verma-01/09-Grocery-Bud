import { useState } from "react";
import GroceryForm from "./components/GroceryForm";
import { nanoid } from "nanoid";
import Lists from "./components/Lists";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const setLocalStorage = (list) => {
  localStorage.setItem("list", JSON.stringify(list));
};

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("list")) || [];
};

const App = () => {
  const [list, setList] = useState(getLocalStorage);

  const addItem = (itemName) => {
    const newItem = {
      completed: false,
      itemName,
      id: nanoid(),
    };
    const newList = [...list, newItem];
    setList(newList);
    setLocalStorage(newList);
    toast.success(`${itemName} is added to the Grocery List.`);
  };

  const removeItem = (itemId) => {
    const newItems = list.filter((item) => item.id !== itemId);
    setList(newItems);
    setLocalStorage(newItems);
    toast(`item has been removed`);
  };

  const editItem = (itemId) => {
    const newItems = list.map((item) =>
      item.id === itemId ? { ...item, completed: !item.completed } : item
    );
    setList(newItems);
    setLocalStorage(newItems);
  };

  // console.log(list);
  return (
    <main className="app">
      <h2 className="app-title">Input Form</h2>
      <GroceryForm onAdd={addItem} />
      <Lists list={list} onRemove={removeItem} onEdit={editItem} />
      <ToastContainer position="top-center" />
    </main>
  );
};

export default App;
