import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Header/Navbar";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../Helpers/Axios.Config";

const Cart = () => {
  const { state } = useContext(AuthContext);
  const [cartProducts, setCartProducts] = useState([]);
  const router = useNavigate();

  async function getYourCartProduct() {
    try {
      const response = await api.post("/user/cart", { id: state?.user?.id })
      if (response.data.success) {
        setCartProducts(response.data.products)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteCartProduct(proId) {
    try {
      const response = await api.post("user/delete-cart", { proId, userId: state?.user?.id })
      if (response.data.success) {
        toast.success(response.data.message)
        setCartProducts(response.data.products)
      }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    try {
      if (state?.user && state?.user?.id === undefined) {
        toast.error("Please login to access your cart products.")
        setTimeout(() => {
          router("/login")
        }, 2000);
      } else {
        if (state?.user?.id) {
          getYourCartProduct()
        }
      }
    } catch (error) {
      console.log(error)
    }
  }, [state])

  return (
    <>
      <Navbar />
      <h1>Cart</h1>
      <div className="ypro-layout">
        {cartProducts.length && cartProducts.map((pro) => (
          <div className="ypro-content" key={pro._id}>
            <div className="ypro-img-box">
              <img src={pro.image} alt="product-img" className="ypro-img" />
            </div>
            <div className="ypro-text-layout">
              <h1 className="ypro-name">{pro.name}</h1>
              <div className="ypro-text">
                <p className="ypro-price">Price: {pro.price}$</p>
                <div className="add-cart-layout">
                  <button className="add-cart1" onClick={() => router(`/single-product-page/${pro._id}`)}>View</button>
                  <button className="add-cart2" onClick={() => deleteCartProduct(pro._id)}>Delete</button>
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

export default Cart;