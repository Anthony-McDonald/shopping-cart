import './css/App.css'
import Header from './components/Header'
import MainArea from './components/MainArea'
import { useState } from 'react'

function App() {

  return (
    <>
    <Header showCart={false}/>
    <MainArea />
    </>
  )
}

export default App
