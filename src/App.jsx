import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navigation from './components/Navigation'
import Shop from './pages/Shop'
import './index.css'
import { useState,useContext } from 'react'


function App() {

  return (
  <>
  <Navigation></Navigation>
  <Shop></Shop>
  </>
  )
}

export default App
