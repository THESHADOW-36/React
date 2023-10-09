import React from "react";
import { useNavigate } from "react-router-dom";

const ChildrenProp = () => {
   const router = useNavigate()
   return (
      <>
         <H1>Hello</H1>
         <Button>Message</Button>
         <button onClick={() => router('/')}>Homepage</button>
      </>
   )
}

const Button = ({ children }) => {
   return (
      <div>
         <button>{children}</button>
      </div>
   )
}

const H1 = ({ children }) => {
   return (
      <div>
         <h1>{children}</h1>
      </div>
   )
}

export default ChildrenProp