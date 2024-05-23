'use client'

import React from "react";
import { useSelector } from "react-redux";

const boxSlice = () => {
  const { width, height, backGroundColor } = useSelector((state) => state.box);

  return (
    <div
      style={{
        width: {width},
        height: {height},
        backgroundColor: backGroundColor,
      }}
    >
      This is a box.
    </div>
  );
};

export default boxSlice;
