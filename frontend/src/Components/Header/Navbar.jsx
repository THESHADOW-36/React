import React, { useContext } from "react"
import "./Navbar.css"
import { AuthContext } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const { state, Logout } = useContext(AuthContext)

  const router = useNavigate()


  return (
    <div className="navbar-layout">
      <div className="navbar">
        <div className="nav-home-layout" onClick={() => router("/")}>Home</div>

        <div className="nav-category-layout">
          <div className="nav-products" onClick={() => router("/products")}>Products</div>
          {state?.user?.id &&
            <div className="nav-category">
              <div onClick={() => router("/your-products")}>Your Products</div>
              <div onClick={() => router("/add-product")}>Add Product</div>
            </div>
          }
        </div>

        <div className="nav-menu-layout">
          {state?.user?.id ?
            <div className="nav-menu">
              <div className="nav-profile">Profile</div>
              <div className="nav-cart" onClick={() => router("/cart")}>Cart</div>
              <div className="nav-logout" onClick={Logout}>Logout</div>
            </div>
            :
            <div className="nav-login" onClick={() => router("/login")}>Login</div>
          }


        </div>
      </div>
    </div>
  )
}

export default Navbar;