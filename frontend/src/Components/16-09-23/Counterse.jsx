import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Counterse = () => {
   const [count, setCount] = useState(0)
   const router = useNavigate()
   const add = () => {
      setCount((add) => add + 1)
   }
   const sub = () => {
      setCount((sub) => sub - 1)
   }

   useEffect(() => {
      if (count === 10) {
         alert('Counter = 10')
      }
   }, [count])
   return (
      <div>
         <p>Counter - {count}</p>
         <button onClick={add}>+</button>
         <button onClick={sub}>-</button>
         <br />
         <button onClick={() => router('/')}>Homepage</button>
      </div>
   )
}

export default Counterse