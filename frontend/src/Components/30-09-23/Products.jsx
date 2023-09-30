import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios"
import "./Products.css"

const Products = () => {
   const [products, setProducts] = useState([])

   useEffect(() => {
      async function getProducts() {
         try {
            const { data } = await axios.get('https://fakestoreapi.com/products')
            setProducts(data)
         } catch (error) {
            toast.error(error.message)
         }
      }
      getProducts()
   }, [])


   return (
      <div>
         <h1 className="title">New Products</h1>
         {products?.length ?
            <div className="pro-layout">
               {products.map((pro) => (
                  <div className="pro-content">
                     <div className="pro-img-box">
                        <img src={pro.image} alt="product-img" className="pro-img" />
                     </div>
                     <div className="pro-text-layout">
                        <h1 className="pro-name">{pro.title}</h1>
                        <div className="pro-text">
                           <p className="pro-price">Price: {pro.price}$</p>
                           <button className="add-cart">Add to cart</button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            :
            <div>Loading...</div>
         }
      </div>
   )
}

export default Products;