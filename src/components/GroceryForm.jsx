import React, { useState } from "react";

const GroceryForm = ({ onAdd }) => {
  const [itemName, setItemName] = useState("");

  const handleItemSubmit = (e) => {
    e.preventDefault();
    console.log("Name is Sumitted", itemName);
    onAdd(itemName);
    setItemName("");
  };
  return (
    <form className="grocery-form" onSubmit={handleItemSubmit}>
      <input
        type="text"
        className="grocery-input"
        onChange={(e) => setItemName(e.target.value)}
        value={itemName}
      />
      <button className="grocery-submit">Add Item</button>
    </form>
  );
};

export default GroceryForm;
