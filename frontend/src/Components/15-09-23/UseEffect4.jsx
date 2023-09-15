import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Effect4() {
   const [count1, setCount1] = useState(0)
   const [count2, setCount2] = useState(0)
   const router = useNavigate()
   useEffect(() => {
      alert('Multiple Dependency - First render, Reload and Multi-Selected State changes')
   }, [count1, count2])

   return (
      <div>
         <p>Counter 1 = {count1}</p>
         <button onClick={() => setCount1((add) => add + 1)}>ADD</button>
         <br />
         <p>Counter 2 = {count2}</p>
         <button onClick={() => setCount2((add) => add + 1)}>ADD</button>
         <br />
         <button onClick={() => router('/')}>Homepage</button>
      </div>
   )
}

export default Effect4