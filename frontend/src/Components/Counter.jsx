import { useState } from "react";

function Counter() {
   const [count, setCount] = useState(0)

   return (
      <div>
         <h1>Count = {count}</h1>
         <button onClick={() => setCount((add) => add + 1)}>+1</button>
         <button onClick={() => setCount((less) => less - 1)}>-1</button>
      </div>
   )
}
export default Counter;