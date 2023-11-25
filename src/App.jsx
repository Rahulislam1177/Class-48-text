
import {RouterProvider ,createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Main from './Layout/Main'
import Order from './Pages/Order/Order'
import Register from './Shared/Header/Register/Register'
import Login from './Login/Login'



function App() {
const router = createBrowserRouter([
  
    
  
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/order",
        element:<Order></Order>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
    
  

])

  return (
   <div>
    <RouterProvider router={router}></RouterProvider>
   </div>
  )
}

export default App
