"use client";

import { current } from "@reduxjs/toolkit";
import { useState } from "react";

const eventHandle = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-center space-x-8 p-10">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded "
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <p className="text-4xl font-semibold text-gray-800">{count}</p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded "
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <input
          className="border border-green-400 p-2 rounded shadow"
          onChange={handleChange}
          placeholder="Type something..."
        />

        <p className="mt-4 text-gray-700">You Typed: {input}</p>
      </div>
    </>
  );
};

export default eventHandle;
