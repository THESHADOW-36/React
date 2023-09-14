import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Counter() {
   const [count, setCount] = useState(0)
   const router = useNavigate()
   return (
      <div>
         <h1>Count = {count}</h1>
         <button onClick={() => setCount((add) => add + 1)}>+1</button>
         <button onClick={() => setCount((less) => less - 1)}>-1</button>
         <br />
         <button onClick={() => router('/')}>Home</button>
      </div>
   )
}
export default Counter;