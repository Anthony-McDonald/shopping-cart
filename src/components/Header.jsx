import { Link } from "react-router-dom"
import SearchElement from "./SearchElement"
import '../css/Header.css'

export default function Header() {
    return (
        <div className="header" id="header-id">
        <Link to="/">
    
        <div className="top-left">
          <img className="white logo" src="/src/assets/svgs/logo.svg" alt="logo" />
          <div className="title-text">
          <h3 className='website-name'>Pixel Perfect</h3>
          <h5 className="slogan">B o r n To P l a y</h5>
          </div>
          </div>
          
        </Link>

        <div className="search-div">
            {/* <h1>testeeer</h1> */}
        <SearchElement className="search-box"/>
        </div>

    
          <Link to="./games">
          <div className="shopping-cart">
            <div className="shop-wrapper">
            <img className="white cart-img" src="/src/assets/svgs/cart.svg" alt="cart" />
            </div>
    
          </div>
            
            </Link> 
    
        </div>
    )
}