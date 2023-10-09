import React from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"


function SinglePage() {
   const router = useNavigate()
   const { id } = useParams()
   return (
      <div>
         <p>Single Product - {id}</p>
         <button onClick={() => router("/")}>Homepage</button>
      </div>
   )
}

export default SinglePage