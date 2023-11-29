import React, { useEffect, useState } from "react";
import "./UpdateProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../Helpers/Axios.Config";
import toast from "react-hot-toast";
import Navbar from "../Header/Navbar";

const UpdateProduct = () => {

  const { id } = useParams();

  const [productData, setProductData] = useState({})

  const router = useNavigate()

  console.log(productData)

  async function getProductData() {
    try {
      const response = await api.get(`/product/get-single-product?id=${id}`)
      if (response.data.success) {
        setProductData(response.data.product)
      }
    } catch (error) {
      console.log(error)
    }
  }

  function handleChange(event) {
    setProductData({ ...productData, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const response = await api.post("/product/update-product", { productData })
      if (response.data.success) {
        router("/your-products")
        toast.success(response.data.message)
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    if (id) {
      getProductData()
    }
  }, [id])

  return (
    <>
      <Navbar />
      <div className="your-product">
        <h1>Update Product</h1>
        <div className="your-product-image"><img src={productData.image} alt="" /></div>
        <form onSubmit={handleSubmit} className="your-product-form">
          <label>Product Name</label><br />
          <input type="text" value={productData.name} onChange={handleChange} name="name" /><br />
          <label>Product Price</label><br />
          <input type="number" value={productData.price} onChange={handleChange} name="price" /><br />
          <label>Product Image</label><br />
          <input type="url" value={productData.image} onChange={handleChange} name="image" /><br />
          <label>Product Category</label><br />
          <input type="text" value={productData.category} onChange={handleChange} name="category" /><br />
          <input type="submit" value="Update" />
        </form>
      </div>
    </>
  )
}

export default UpdateProduct;