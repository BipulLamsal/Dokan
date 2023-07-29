import React from 'react'

import App from './App'
import Shop from './pages/Shop'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function Route() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<App/>,
    },
    {
      path:'/shop',
      element:<Shop/>,
    }
  ])

  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default Route