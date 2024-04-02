import { Link } from "react-router-dom"
import SearchElement from "./SearchElement"
import { useSidebar } from "./SidebarContext"
import '../css/Header.css'

export default function Header({ showCart }) {
  const { toggleSidebar } = useSidebar();

  function shopEffect() {
    console.log("shop clicked")
    toggleSidebar();
  }
    return (
        <div className="header" id="header-id">
        <Link to="/">
    
        <div className="top-left">
          <img className="white logo" src="/src/assets/svgs/logo.svg" alt="logo" />
          <div className="title-text">
          <h3 className='website-name'>Pixel Perfect</h3>
          <h5 className="slogan">Born To Play</h5>
          </div>
          </div>
          
        </Link>

        <div className="search-div">
            {/* <h1>testeeer</h1> */}
        <SearchElement className="search-box"/>
        </div>

    
        {showCart && 
                  <div className="shopping-cart">
                  <div className="shop-wrapper">
                  <img onClick={shopEffect} className="white cart-img" src="/src/assets/svgs/cart.svg" alt="cart" />
                  </div>
                </div>
        }

            
    
        </div>
    )
}