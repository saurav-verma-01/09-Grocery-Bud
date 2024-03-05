import { useState } from "react";
import GroceryForm from "./components/GroceryForm";
import { nanoid } from "nanoid";
import Lists from "./components/Lists";

const App = () => {
  const [list, setList] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      completed: false,
      itemName,
      id: nanoid(),
    };
    setList([...list, newItem]);
  };

  console.log(list);
  return (
    <main className="app">
      <h2 className="app-title">Input Form</h2>
      <GroceryForm onAdd={addItem} />
      <Lists list={list} />
    </main>
  );
};

export default App;
