import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function Homepage() {
   const router = useNavigate()

   return (
      <div>
         <h1>REACT</h1>
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
         <button onClick={() => router("/counterse")}>CounterSE</button>
         <button onClick={() => router("/mapping")}>Mapping</button>
         <button onClick={() => router("/ternary")}>Ternary</button>
         <button onClick={() => router("/styled-components")}>StyledCompo</button>
         <br />
         <button onClick={() => router('/dynamic-styles')}>DynamicStyles</button>
         <button onClick={() => router('/children-prop')}>ChildrenProp</button>
         <button onClick={() => router('/sign-up')}>SignUp</button>
         <br />
         <button onClick={() => router('/class-component')}>ClassComponent</button>
         <button onClick={() => router('/products')}>Products</button>
         <br />
         <button onClick={() => toast.error("Error")}>Error</button>
         <button onClick={() => toast.success("Success")}>Success</button>
      </div>
   )
}
export default Homepage;