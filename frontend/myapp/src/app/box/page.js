"use client";

import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseWidth,
  increaseHeight,
  changeShape,
  changeColor,
} from "@/redux/reducerSlices/boxSlice";

const BoxComponent = () => {
  const { width, height, backGroundColor, borderRadius } = useSelector(
    (state) => state.box
  );

  const dispatch = useDispatch();

  const generateArea = () => {
    if (borderRadius === "50%") {
      return Math.PI * (width / 2) ** 2;
    } else {
      return width * height;
    }
  };

  return (
    <>
      <main className="flex justify-center pt-4">
        <div
          style={{
            width: width,
            height: height,
            backgroundColor: backGroundColor,
            borderRadius: borderRadius,
          }}
        ></div>
      </main>
      {generateArea()}
      <div className="flex justify-center flex-col p-10">
        <Button onClick={() => dispatch(increaseWidth())}>+Width</Button>
        <Button onClick={() => dispatch(increaseHeight())}>+Height</Button>
        <Button onClick={() => dispatch(changeShape())}>
          Change to circle
        </Button>
        <Input
          onChange={(x) => dispatch(changeColor(x.target.value))}
          placeholder="Enter color"
        />
        <Button>Shift-Right</Button>
        <Button>Shift-Left</Button>
        <Button>Shift-Top</Button>
        <Button>Shift-Button</Button>
      </div>
    </>
  );
};

export default BoxComponent;
