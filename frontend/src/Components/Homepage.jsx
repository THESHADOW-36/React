import { useNavigate } from "react-router-dom";

function Homepage(){
   const router = useNavigate()

   return(
      <div>
         <h1>HELLO</h1>
         <button onClick={()=>router("/register")}>Register</button>
         <button onClick={()=>router("/login")}>Login</button>
         <button onClick={()=>router("/counter")}>Counter</button>
      </div>
   )
}
export default Homepage;