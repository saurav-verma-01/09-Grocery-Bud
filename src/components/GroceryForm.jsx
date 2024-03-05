import React, { useState } from "react";
import { toast } from "react-toastify";

const GroceryForm = ({ onAdd }) => {
  const [itemName, setItemName] = useState("");

  const handleItemSubmit = (e) => {
    e.preventDefault();
    if (!itemName) {
      toast.error("Please Enter the Item and then Click Submit");
      return;
    }
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
