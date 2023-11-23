import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../Helpers/Axios.Config";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
   const [userData, setUserData] = useState({ email: "", password: "" })
   console.log(userData)
   const router = useNavigate()
   // eslint-disable-next-line
   const { state, Login } = useContext(AuthContext)

   const handleChange = (event) => {
      setUserData({ ...userData, [event.target.name]: event.target.value })
   }

   const sendDataToBackend = async (event) => {
      event.preventDefault()
      if (userData.email && userData.password) {
         if (userData.password.length >= 8) {
            try {
               const response = await api.post("/auth/login", { userData });
               if (response.data.success) {
                  localStorage.setItem("my-token", JSON.stringify(response.data.token))
                  Login(response.data.user);
                  console.log(response.data, "response data")
                  toast.success("Login Successful")
                  setUserData({ email: "", password: "" })
                  router("/")
               } else {
                  throw new Error("Something went wrong...")
               }
            } catch (error) {
               toast.error(error?.message)
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
         <h1>Login</h1>
         <form onSubmit={sendDataToBackend}>
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

export default Login