'use client'
import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";

export default function App() {
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

  return (
    <div className="gap-4 p-4 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item) => (
        <Link href={`/${item.id}`} key={item.id} passHref>
          <CardComponent item={item} />
        </Link>
      ))}
    </div>
  );
}

function CardComponent({ item }) {
  return (
    <Card shadow="sm" isPressable id={item.id} className="m-2">
      <CardBody
        className="overflow-visible p-0"
        style={{ backgroundColor: item.color, height: "160px" }}
      />
      <CardFooter className="text-small justify-between">
        <b>{item.title}</b>
        <p className="text-default-500">{item.price}</p>
      </CardFooter>
    </Card>
  );
}



// Adding comments to explain the logic and concepts:

/*
1. **Component Separation**:
   - Keeping components separate enhances modularity, reusability, and readability.
   - `App` component handles the data and layout, while `CardComponent` focuses on rendering individual cards.

2. **Data Structure**:
   - The `list` array holds card data, each containing a unique `id`, `title`, `color`, and `price`.

3. **Event Handling**:
   - `handlePress` function logs the id of the pressed item. It demonstrates handling events within the `App` component.

4. **Styling**:
   - Inline styles set background colors dynamically based on the `item.color` value.

5. **Rendering**:
   - `map` function iterates over `list` to create a `CardComponent` for each item, passing `item` and `onPress` as props.

6. **Code Clarity**:
   - Comments explain the purpose of each part, making the code easier to understand and maintain.
*/
