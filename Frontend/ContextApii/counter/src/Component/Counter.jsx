import React, { useContext } from "react";
import { CounterContext } from "../ContextStore/Context";

function Counter() {
  const { count, increment, decrement, reset } = useContext(CounterContext); // Access the correct context
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">{count}</h1>
      <div className="mt-4 space-x-4">
        <button onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded-md">Increment</button>
        <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded-md">Decrement</button>
        <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded-md">Reset</button>
      </div>
    </div>
  );
}

export default Counter;
