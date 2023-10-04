import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./SingleProductPage.css"

const SingleProductPage = () => {
   const [productData, setProductData] = useState({})
   const router = useNavigate()
   function HomepageNav(){
      router('/products')
   }
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
                  <img src={productData.image} alt="product-img" />
               </div>


               <div className="single-pro-info">
                  <div className="single-pro-nav">
                     <p className="single-pro-cat"><span>Category</span>: {productData.category}</p>
                     <div className="single-pro-home-logo" onClick={HomepageNav}><i class="fa-solid fa-house"></i></div>
                  </div>
                  <div className="sin-pro-lay">
                     <div className="sin-pro-lay-1">
                        <h2 className="single-pro-title">{productData.title}</h2>
                        <p>Description:{productData.description}</p>
                     </div>

                     <div className="sin-pro-lay-2">
                        <div className="single-pro-rating">
                           <p>{productData.rating.rate}</p>
                           <div className="rating-star"><i class="fa-solid fa-star"></i></div>
                           <p>| {productData.rating.count} Ratings</p>
                        </div>

                        <div className="sin-pro-price-offers">
                           <p>Price: {productData.price}$</p>
                           <p>Available offers and discounts</p>
                        </div>

                        <div className="single-pro-buttons">
                           <button>ADD TO BAG</button>
                           <button>SAVE TO WISHLIST</button>
                        </div>
                     </div>
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