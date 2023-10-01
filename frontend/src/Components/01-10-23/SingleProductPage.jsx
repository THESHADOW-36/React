import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
   const [productData, setProductData] = useState({})
   const { id } = useParams()
   useEffect(() => {
      async function getSingleProductData() {
         try {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
            if(data){
               setProductData(data)
            }
         } catch (error) {
            console.log(error)
         }
      }
      if (id) {
         getSingleProductData()
      }
   }, [id])
   console.log(productData)

   return (
      <div>
         {productData?.id?
         <div className="single-pro-pg">
            <div className="single-pro-img">
               <img src={productData.image} alt="" />
            </div>
            <div className="single-pro-info">
               <h1>{productData.title}</h1>
               <p>Category:{productData.category}</p>
               <p>Description:{productData.description}</p>
               <p>Price:{productData.price}</p>
               <p>Rating:{productData.rating.rate}</p>
               <p>no of ratings:{productData.rating.count}</p>
            </div>
         </div>
         :
         <div>Loading...</div>
         }
      </div>
   )
}

export default SingleProductPage