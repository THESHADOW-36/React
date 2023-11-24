import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../Helpers/Axios.Config";

const SignUp = () => {
   const [userData, setUserData] = useState({ name: "", email: "", password: "" })
   console.log(userData)

   const router = useNavigate()

   const handleChange = (event) => {
      // console.log(event.target.value,"value", event.target.name, "name")
      setUserData({ ...userData, [event.target.name]: event.target.value })
   }

   const sendDataToBackend = async (event) => {
      // alert("Data submitted to backend..")
      event.preventDefault()
      if (userData.name && userData.email && userData.password) {
         if (userData.password.length >= 8) {
            try {
               const response = await api.post("/auth/register", { userData });
               // const response = { data: { success: true } }
               if (response.data.success) {
                  toast.success("Registration Successful")
                  router("/")
               } else {
                  throw new Error("Something went wrong...")
               }
            } catch (error) {
               toast.error(error?.response.data.message)
               console.log(error, "error here")
            }
         } else {
            alert("Password must contain atleast 8 character")
         }
      } else {
         alert("All Fields are mandatory")
      }
   }


   return (
      <div>
         <h1>Register</h1>
         <form onSubmit={sendDataToBackend}>
            <label>Name</label><br />
            <input name="name" type="text" onChange={handleChange} /><br />
            <label>Email</label><br />
            <input name="email" type="email" onChange={handleChange} /><br />
            <label>Password</label><br />
            <input name="password" type="password" onChange={handleChange} /><br />
            <br />
            <input type="Submit" value="Submit" />
         </form>
      </div>
   )
}

export default SignUp