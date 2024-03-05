import React from "react";
import Item from "./Item";

const Lists = ({ list, onRemove }) => {
  return (
    <section className="list">
      {list.map((item) => (
        <Item item={item} onRemove={onRemove} />
      ))}
    </section>
  );
};

export default Lists;
