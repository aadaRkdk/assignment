"use client";

import React from "react";
import { useParams } from "next/navigation";

// Define the ItemDetail component to handle the dynamic route
const ItemDetail = () => {
  const { id } = useParams();

  // Sample data list (you can fetch this data from an API or database in a real app)
  const list = [
    { id: "1", title: "Orange", color: "orange", price: "$5.50" },
    { id: "2", title: "Tangerine", color: "darkorange", price: "$3.00" },
    { id: "3", title: "Raspberry", color: "crimson", price: "$10.00" },
    { id: "4", title: "Lemon", color: "yellow", price: "$5.30" },
    { id: "5", title: "Avocado", color: "darkgreen", price: "$15.70" },
    { id: "6", title: "Lemon 2", color: "lightyellow", price: "$8.00" },
    { id: "7", title: "Banana", color: "khaki", price: "$7.50" },
    { id: "8", title: "Watermelon", color: "lightcoral", price: "$12.20" },
  ];

  // Find the item with the matching id
  const item = list.find((item) => item.id === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div style={{ padding: "20px", backgroundColor: item.color }}>
      <h1>{item.title}</h1>
      <p>Price: {item.price}</p>
    </div>
  );
};

export default ItemDetail;
