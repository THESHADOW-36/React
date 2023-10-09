import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './DynamicStyles.css'

const DynamicStyles = () => {
   const [isButtonActive, setIsButtonActive] = useState(false)
   const router = useNavigate()
   const handleButtonClick = () => {
      setIsButtonActive(!isButtonActive)
   }
   const buttonClassName = isButtonActive ? 'Active-Button' : 'Inactive-Button'
   console.log(buttonClassName)

   return (
      <div>
         <h1>Dynamic Styles</h1>
         <button className={buttonClassName} onClick={handleButtonClick}>
            {isButtonActive ? 'Active' : 'Inactive'}
         </button>
         <br />
         <button className="homepage" onClick={() => router('/')}>Homepage</button>
      </div>
   )
}

export default DynamicStyles