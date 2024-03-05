import React from "react";
import Item from "./Item";

const Lists = ({ list, onRemove, onEdit }) => {
  return (
    <section className="list">
      {list.map((item) => (
        <Item item={item} onRemove={onRemove} onEdit={onEdit} key={item.id} />
      ))}
    </section>
  );
};

export default Lists;
