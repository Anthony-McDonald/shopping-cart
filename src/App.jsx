// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './css/App.css'
import Header from './components/Header'
import MainArea from './components/MainArea'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <MainArea />

    
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
