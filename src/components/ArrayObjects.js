import React from "react";

function ArrayObjects() {
  let products = [
    {
      name: "Pizza",
      price: 200,
    },
    {
      name: "Sandwich",
      price: 180,
    },
    {
      name: "Coca Cola",
      price: 50,
    },
    {
      name: "French Fries",
      price: 60,
    },
  ];

  return (
    <ul>
      {products.map((p) => (
        <li key={p.name}>
          {p.name} costs {p.price}
        </li>
      ))}
    </ul>
  );
}

export default ArrayObjects;
