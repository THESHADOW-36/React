import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
   const [userData, setUserData] = useState({ name: "", email: "", password: "" })
   console.log(userData)

   const router = useNavigate()

   const hanleChange = (event) => {
      // console.log(event.target.value,"value", event.target.name, "name")
      setUserData({...userData ,[event.target.name]: event.target.value})
   }

   const sendDataToBackend = async(event) => {
      // alert("Data submitted to backend..")
      event.preventDefault()
      if(userData.name && userData.email && userData.password){
         if (userData.password.length >= 8){
            // const response = await axios.post("http://localhost:8000/register", { userData });
            const response = {data:{success:true}}
            if(response.data.success){
               alert("Registration Successful")
               router("/")
            }else(
               alert(response.data.error)
            )
         }else{
            alert("Password must contain atleast 8 character")
         }
      }else{
         alert("All Fields are mandatory")
      }
   }
   

   return (
      <div>
         <h1>Register</h1>
         <form onSubmit={sendDataToBackend}>
            <label>Name</label><br />
            <input name="name" type="text" onChange={hanleChange} /><br />
            <label>Email</label><br />
            <input name="email" type="email" onChange={hanleChange} /><br />
            <label>Password</label><br />
            <input name="password" type="password" onChange={hanleChange} /><br />
            <br />
            <input type="Submit" value="Register here" />
         </form>
      </div>
   )
}

export default SignUp