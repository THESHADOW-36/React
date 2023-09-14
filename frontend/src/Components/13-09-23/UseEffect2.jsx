import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Effect2(){
   const [count, setCount] = useState(0)
   const router = useNavigate()

   useEffect(()=>{
      alert("First render and Reload")
   },[])

   return (
      <div>
         <p>Count = {count}</p>
         <button onClick={() => setCount((add) => add + 1)}>+</button>
         <button onClick={() => setCount((sub) => sub - 1)}>-</button>
         <br />
         <button onClick={() => router('/')}>Homepage</button>
      </div>
   )
}

export default Effect2
