import React from "react";

const Item = ({ item, onRemove }) => {
  console.log(item);
  const handleRemove = () => {
    onRemove(item.id);
  };
  return (
    <div className="item">
      <input type="checkbox" name="completed" id="completed" />
      <p className="item-name">{item.itemName}</p>
      <button onClick={handleRemove} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default Item;
