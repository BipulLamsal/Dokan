import React from 'react'

import App from './App'
import Shop from './pages/Shop'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Showcase from './components/Showcase'

function Route() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<App/>,
    },
    {
      path:'/shop',
      element:<Shop/>,
    },
    {
      path:'/shop/:productID',
      element:<Showcase/>
    }
  ])

  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default Route