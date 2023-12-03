import React, { useContext, useEffect, useState } from "react";
import "./YourProducts.css"
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../Helpers/Axios.Config";
import Navbar from "../Header/Navbar";

const YourProducts = () => {
  const { state } = useContext(AuthContext);
  const [yourProducts, setYourProducts] = useState([])
  const router = useNavigate();

  console.log(yourProducts, "yourProducts")

  async function getYourProducts() {
    try {
      const response = await api.post("/product/your-products", { id: state?.user?.id })
      if (response.data.success) {
        setYourProducts(response.data.products)
      }
    } catch (error) {
      toast.error(error?.response.data.message)
    }
  }

  async function deleteProduct(id) {
    try {
      const response = await api.delete("/product/delete-product", { params: { id } })
      if (response.data.success) {
        getYourProducts();
        toast.success(response.data.message)
      }
    } catch (error) {
      toast.error(error?.response.data.message)
    }
  }

  useEffect(() => {
    if (state?.user && state?.user?.name === undefined) {
      router("/login")
      toast.error("Please login to access this page ")
    }
    if (state?.user && state?.user?.name !== undefined) {
      getYourProducts()
    }
    // eslint-disable-next-line
  }, [state])

  return (
    <>
      <Navbar />
      <h1>Your Products</h1>
      <div className="ypro-layout">
        {yourProducts.length && yourProducts.map((pro) => (
          <div className="ypro-content" key={pro._id}>
            <div className="ypro-img-box">
              <img src={pro.image} alt="product-img" className="ypro-img" />
            </div>
            <div className="ypro-text-layout">
              <h1 className="ypro-name">{pro.name}</h1>
              <div className="ypro-text">
                <p className="ypro-price">Price: {pro.price}$</p>
                <div className="add-cart-layout">
                  <button className="add-cart1" onClick={() => router(`/update-product/${pro._id}`)}>Update</button>
                  <button className="add-cart2" onClick={() => deleteProduct(pro._id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </>
  )
}

export default YourProducts;