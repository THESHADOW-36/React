import { useNavigate } from "react-router-dom";

function Homepage() {
   const router = useNavigate()

   return (
      <div>
         <h1>HELLO</h1>
         <button onClick={() => router("/register")}>Register</button>
         <button onClick={() => router("/login")}>Login</button>
         <button onClick={() => router("/counter")}>Counter</button>
         <br />
         <button onClick={() => router("/effect1")}>Effect1</button>
         <button onClick={() => router("/effect2")}>Effect2</button>
         <button onClick={() => router("/effect3")}>Effect3</button>
         <button onClick={() => router("/effect4")}>Effect4</button>
         <button onClick={() => router("/params")}>Params</button>
         <br />
         <button onClick={()=>router("/counterse")}>CounterSE</button>
         <button onClick={()=>router("/mapping")}>Mapping</button>
         <button onClick={()=>router("/ternary")}>Ternary</button>
      </div>
   )
}
export default Homepage;