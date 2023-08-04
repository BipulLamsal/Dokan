import { createContext,useState } from 'react'
import App from './App'
import Shop from './pages/Shop'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Showcase from './components/Showcase'

export const CartContext = createContext()

function Route() {
  const [checkout, setCheckout] = useState(false);
  const [cart, setCart] = useState([]);

  const router = createBrowserRouter([
    {
      path:'/',
      element:<App/>,
    },
    {
      path:'/shop',
      element:<CartContext.Provider value={{checkout,setCheckout,cart,setCart}}><Shop></Shop></CartContext.Provider>,
    },
    {
      path:'/shop/:productID',
      element:<CartContext.Provider value={{checkout,setCheckout,cart,setCart}}><Showcase></Showcase></CartContext.Provider>,
    }
  ])

  return (
    
   <RouterProvider router={router}></RouterProvider>
   
  )
}

export default Route