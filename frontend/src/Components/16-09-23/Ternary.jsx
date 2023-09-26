import React from "react";
import { useNavigate } from "react-router-dom";

function Ternary({ loggedIn, setIsLoggedIn }) {
   const router = useNavigate()

   return (
      <div>
         <h1>Ternary Operator</h1>

         {loggedIn ?
            <h1 onClick={() => setIsLoggedIn((preValue) => !preValue)}>Welcome</h1>:
            <button onClick={()=>setIsLoggedIn((preValue) => !preValue)}>Log In</button>
         }

         <br />
         <button onClick={() => router('/')}>Homepage</button>
      </div>
   )
}

export default Ternary