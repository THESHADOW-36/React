import React from "react";

const ChildrenProp = () => {
   return (
      <>
      <H1>Hello</H1>
      <Button>Message</Button>
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

const H1 = ({children}) => {
   return (
      <div>
         <h1>{children}</h1>
      </div>
   )
}

export default ChildrenProp