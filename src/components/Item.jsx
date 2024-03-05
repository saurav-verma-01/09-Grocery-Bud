import React from "react";

const Item = ({ item }) => {
  console.log(item);
  return (
    <div className="item">
      <input type="checkbox" name="completed" id="completed" />
      <p className="item-name">{item.itemName}</p>
      <button className="delete-btn">Delete</button>
    </div>
  );
};

export default Item;
