import { useState } from "react";
import { createContext } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  let [count, setCount] = useState(0); // Initialize count with 0

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};
