import React from "react";
import useCounter from "./useCounter";

const CustomHookC = () => {
   const [counter,increment,decrement,reset] = useCounter()

   return(
      <div>
         <h1>Counter: {counter}</h1>
         <button onClick={decrement}>-</button>
         <button onClick={reset}>Reset</button>
         <button onClick={increment}>+</button>
      </div>
   )
}

export default CustomHookC;