import React from "react";
import { useState } from "react";

const SignUp = () => {
   // eslint-disable-next-line
   const [userData, setUserData] = useState({ name: '', email: '', password: '' })
   console.log(userData)

   const hanleChange = (event) => {
      console.log(event.target.value,"value", event.target.name, "name")
   }

   const sendDataToBackend = () => {
      alert("Data submitted to backend..")
   }

   return (
      <div>
         <h1>Register</h1>
         <form onSubmit={sendDataToBackend}>
            <label>Name</label><br />
            <input name="user-name" type="text" onChange={hanleChange} /><br />
            <label>Email</label><br />
            <input name="email" type="email" onChange={hanleChange} /><br />
            <label>Password</label><br />
            <input name="password" type="password" onChange={hanleChange} /><br />
            <br />
            <input type="Submit" />
         </form>
      </div>
   )
}

export default SignUp