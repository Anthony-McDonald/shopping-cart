// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Link} from "react-router-dom"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="header">
    <Link to="/">

    <div className="top-left">
      <img className="white logo" src="/src/assets/svgs/logo.svg" alt="logo" />
      <div className="title-text">
      <h3 className='website-name'>Pixel Perfect</h3>
      <h5 className="slogan">B o r n To P l a y</h5>
      </div>
      </div>
      
    </Link>

      <div className="search-div"></div>

      <Link to="./games">
      <div className="shopping-cart">
        <div className="shop-wrapper">
        <img className="white cart-img" src="/src/assets/svgs/cart.svg" alt="cart" />
        </div>

      </div>
        
        </Link> 

    </div>
    <h1>Our First Test</h1>
    
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App


// PropTypes example

// import PropTypes from 'prop-types';
// import React from 'react';

// const RenderName = (props) => {
//   return <div>{props.name}</div>;
// };

// RenderName.propTypes = {
//   name: PropTypes.string,
// };

// export default RenderName;
