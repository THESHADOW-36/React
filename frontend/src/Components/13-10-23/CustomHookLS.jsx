import React from "react";
import useLocalStorage from "./useLocalStorage";
import { useNavigate } from "react-router-dom";

const CustomHookLS = () => {
   const [name,setName] = useLocalStorage("name", "")

   function handleChange(event){
      setName(event.target.value)
   }

   return (
      <div>
         <input type="text" name={name}  onChange={handleChange}/>
         <h3>Hello, {name}</h3>
      </div>
   )
}

export default CustomHookLS