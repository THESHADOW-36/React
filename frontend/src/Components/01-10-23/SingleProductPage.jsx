import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProductPage.css"

const SingleProductPage = () => {
   const [productData, setProductData] = useState({})
   const { id } = useParams()
   useEffect(() => {
      async function getSingleProductData() {
         try {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
            if (data) {
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
         {productData?.id ?
            <div className="single-pro-pg">
               <div className="single-pro-img">
                  <img src={productData.image} alt="" />
               </div>
               <div className="single-pro-info">
                  <div className="single-pro-nav">
                     <p className="single-pro-cat">Category:{productData.category}</p>
                     <div className="single-pro-home-logo">Home</div>
                  </div>

                  <h1>{productData.title}</h1>

                  <div className="single-pro-rating">
                     <p>Rating:{productData.rating.rate}</p>
                     <p>no of ratings:{productData.rating.count}</p>
                  </div>

                  <p>Description:{productData.description}</p>
                  
                  <p>Price:{productData.price}$</p>

                  <div className="single-pro-buttons">
                     <button>ADD TO BAG</button>
                     <button>SAVE TO WISHLIST</button>
                  </div>
               </div>
            </div>
            :
            <div>Loading...</div>
         }
      </div>
   )
}

export default SingleProductPage