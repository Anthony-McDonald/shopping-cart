import { Link } from "react-router-dom"
import SearchElement from "./SearchElement"
import { useSidebar } from "./SidebarContext"
import '../css/Header.css'

export default function Header({ showCart, setSearchInput, basketSize }) {
  const { toggleSidebar } = useSidebar();

  function shopEffect() {
    console.log("shop clicked")
    toggleSidebar();
  }
    return (
        <div className="header" id="header-id">
        <Link to="/">
    
        <div className="top-left">
          <img className="white logo" src="/assets/svgs/logo.svg" alt="logo" />
          <div className="title-text">
          <h3 className='website-name'>Pixel Perfect</h3>
          <h5 className="slogan">Born To Play</h5>
          </div>
          </div>
          
        </Link>

        <div className="search-div">
            {/* <h1>testeeer</h1> */}
        <SearchElement className="search-box" setSearchInput={setSearchInput}/>
        </div>

    
        {showCart && 
                  <div className="shopping-cart">
                  <div onClick={shopEffect} className="shop-wrapper">
                  <img className="white cart-img" src="/assets/svgs/cart.svg" alt="cart" />
                  <div className="basket-size">
                    <div className="basket-size-wrapper">
                    {basketSize > 0 && <h5>{basketSize}</h5>}
                    </div>
                  </div>
                  </div>
                </div>
        }

            
    
        </div>
    )
}

