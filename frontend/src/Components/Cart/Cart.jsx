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
      <div>
        Cart
      </div>
    </>
  )
}

export default Cart;