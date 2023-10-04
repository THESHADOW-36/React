import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";


const AddProduct = () => {
   const [productData, setProductData] = useState({ name: "", price: "", image: "" })

   const handleChange = (event) => {
      // console.log(event.target.name,event.target.value)
      setProductData({ ...productData, [event.target.name]: event.target.value })
   }

   const handleSubmit = async (event) => {
      event.preventDefault();
      if (productData.name && productData.price && productData.image) {
         try {
            const { data } = await axios.post("https://fakestoreapi.com/products", { title: productData.name, price: productData.price, image: productData.image })
            console.log(data, "responses")
            toast.success("Product updated successfully")
            setProductData({ name: "", price: "", image: "" })
         }
         catch (error) {
            console.log(error)
         }
      } else {
         toast.error("All fields are mandatory")
      }
   }

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
            <br />
            <input type="submit" /><br />
         </form>
      </div>
   )
}

export default AddProduct;