import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../../Helpers/Axios.Config";


const AddProduct = () => {
   const router = useNavigate()

   const { state } = useContext(AuthContext)

   const [productData, setProductData] = useState({ name: "", price: "", image: "", category: "" })

   const handleChange = (event) => {
      // console.log(event.target.name,event.target.value)
      setProductData({ ...productData, [event.target.name]: event.target.value })
   }

   const handleSubmit = async (event) => {
      event.preventDefault();
      if (productData.name && productData.price && productData.image && productData.category) {
         try {
            const { data } = await api.post("/product/add-product", { name: productData.name, price: productData.price, image: productData.image, category: productData.category, id: state?.user.id })
            if (data.success) {
               toast.success(data.message)
               setProductData({ name: "", price: "", image: "", category: "" })
            }
         }
         catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
         }
      } else {
         toast.error("All fields are mandatory")
      }
   }

   useEffect(() => {
      if (state?.user && state?.user?.name === undefined) {
         router("/login")
         toast.error("Pls login to access this page")
      }
   }, [state])

   return (
      <div>
         <h1>Add Product</h1>
         <form onSubmit={handleSubmit}>
            <label>Product Name</label><br />
            <input type="text" name="name" onChange={handleChange} value={productData.name} /><br />
            <label>Product Price</label><br />
            <input type="number" name="price" onChange={handleChange} value={productData.price} /><br />
            <label>Product Image</label><br />
            <input type="url" name="image" onChange={handleChange} value={productData.image} /><br />
            <label>Product Category</label><br />
            <input type="text" name="category" onChange={handleChange} value={productData.category} /><br />
            <br />
            <input type="submit" /><br />
         </form>
      </div>
   )
}

export default AddProduct;