/* 
This calculator is made to practise different concepts while learning. It is not be fully functional. It is not complete and has many exceptions.I
*/
"use client";
import { useState } from "react";

const calculator = () => {
  let [num, setNum] = useState("");

  let [result, setResult] = useState("");
  const digits = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];

  const symbols = ["AC", "⌫", "%", "/", "*", "+", "-", "=", ".", "00"];

  const handleDigitsClick = (value) => {
    setNum((prevNum) => prevNum + value);
  };

  const handleSymbolsClick = (symbol) => {
    switch (symbol) {
      case "AC":
        setNum("");
        setResult("");
        break;
      case "⌫":
        setNum((prevNum) => prevNum.slice(0, -1));
        break;
      case "%":
        if (num !== "") {
          setNum((prevNum) => (parseFloat(prevNum) / 100).toString());
        }
        break;
      case "/":
      case "*":
      case "-":
      case "+":
        if (num !== "") {
          setNum((prevNum) => prevNum + symbol);
        }
        break;
      case "=":
        if (num !== "") {
          try {
            setResult(eval(num).toString());
            setNum("");
          } catch (error) {
            setResult("Error");
          }
        }
        break;
      case ".":
        // Append a decimal point if num is not empty and doesn't already contain a decimal point
        if (num !== "" && !num.includes(".")) {
          setNum((prevNum) => prevNum + ".");
        }
        break;
      case "00":
        if (num !== "") {
          setNum((prevNum) => prevNum + "00");
        }
        break;
      default:
        break;
    }
  };

  const generateDigits = () => {
    return digits.map((item, index) => {
      return (
        <div className="p-1" key={index}>
          <button
            onClick={() => handleDigitsClick(item)}
            className="flex w-10 h-10 bg-gray-400 items-center justify-center rounded"
          >
            {item}
          </button>
        </div>
      );
    });
  };

  const generateSymbols = () => {
    return symbols.map((item, index) => {
      return (
        <div className="p-1" key={index}>
          <button
            onClick={() => handleSymbolsClick(item)}
            className="flex w-10 h-10 bg-orange-300 items-center justify-center rounded"
          >
            {item}
          </button>
        </div>
      );
    });
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-200 border border-gray-500 p-6 mb-4 text-right text-3xl rounded-lg">
          {num || result}
        </div>
        <div>{generateDigits()}</div>
        <div>{generateSymbols()}</div>
      </div>
    </>
  );
};
export default calculator;
