import React, { useState } from "react";

const Item = ({ item, onRemove, onEdit }) => {
  const [isChecked, setIsChecked] = useState(item.completed);
  // console.log(item);
  const handleRemove = () => {
    onRemove(item.id);
  };
  const handleEdit = () => {
    setIsChecked((prev) => !prev);
    onEdit(item.id);
  };
  return (
    <div className="item">
      <input
        type="checkbox"
        name="completed"
        id="completed"
        onChange={handleEdit}
        value={isChecked}
        checked={isChecked}
      />
      <p
        className="item-name"
        style={{ textDecoration: isChecked && "line-through" }}
      >
        {item.itemName}
      </p>
      <button onClick={handleRemove} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default Item;
