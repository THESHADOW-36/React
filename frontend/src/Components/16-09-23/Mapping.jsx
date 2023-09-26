import React from "react";
import { useNavigate } from "react-router-dom";

function Mapping({names, greeting}){
   const router = useNavigate()
   return(
   <div>
      <h1>Mapping</h1>
      {names.map((name,i)=>(
         <div key={i}>
            <h3>{name}</h3>
         </div>
      ))}
      <button onClick={()=>router('/')}>Homepage</button>
   </div>
   )
}

export default Mapping