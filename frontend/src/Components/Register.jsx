import { useNavigate } from "react-router-dom"

function Register(){

   const router = useNavigate()
   
   function regToRouter(){
      router("/")
   }

   return(
      <div>
         <h1>Register</h1>
         <button onClick={regToRouter}>Home</button>
      </div>
   )
}
export default Register