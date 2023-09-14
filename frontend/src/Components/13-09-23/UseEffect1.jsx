import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Effect1() {
   const [count, setCount] = useState(0)
   const router = useNavigate()

   useEffect(()=>{
      alert('First render, Reload and State change')
   })
   return (
      <div>
         <p>Count = {count}</p>
         <button onClick={() => setCount((add) => add + 1)}>Add</button>
         <br />
         <button onClick={()=>router('/')}>Homepage</button>
      </div>
   )
}

export default Effect1