import React from "react";
import { useNavigate } from "react-router-dom";

function Params() {
   const router = useNavigate()

   return (
      <div>
         <button onClick={() => router('/singleproduct/12345/dress')}>Single Product</button>
         <br />
         <button onClick={() => router('/')}>Homepage</button>
      </div>
   )
}
export default Params