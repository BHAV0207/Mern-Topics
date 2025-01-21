import React from "react";
import Greetings from "./Greetings";

const Counter = () => {

  return (
    <div>
      <Greetings name="bhav" age={20}/>
      <Greetings name={20}/>
    </div>
  );
};

export default Counter;
