import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Products.css"
import api from "../../Helpers/Axios.Config";
import Navbar from "../Header/Navbar";
const Products = () => {
   const [products, setProducts] = useState([])
   const router = useNavigate()
   useEffect(() => {
      async function getProducts() {
         try {
            // const { data } = await axios.get('https://fakestoreapi.com/products')
            const { data } = await api.get('/product/get-all-product')
            if (data) {
               setProducts(data.products)
            }
         } catch (error) {
            toast.error(error.data.message)
         }
      }
      getProducts()
   }, [])


   return (
      <>
      <Navbar/>
         <div>
            <h1 className="title">New Products</h1>
            {products?.length ?
               <div className="pro-layout">
                  {products.map((pro) => (
                     <div className="pro-content" >
                        <div className="pro-img-box">
                           <img src={pro.image} alt="product-img" className="pro-img" />
                        </div>
                        <div className="pro-text-layout">
                           <h1 className="pro-name">{pro.name}</h1>
                           <div className="pro-text">
                              <p className="pro-price">Price: {pro.price}$</p>
                              <button className="add-cart" onClick={() => router(`/single-product-page/${pro._id}`)}>Click to View</button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
               :
               <div>Loading...</div>
            }
         </div>
      </>
   )
}

export default Products;