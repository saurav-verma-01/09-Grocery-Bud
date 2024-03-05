import React from "react";
import Item from "./Item";

const Lists = ({ list }) => {
  return (
    <section className="list">
      {list.map((item) => (
        <Item item={item} />
      ))}
    </section>
  );
};

export default Lists;
