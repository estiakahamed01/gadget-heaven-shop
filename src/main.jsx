import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Statics from './components/Statics/Statics';
import ViewDetails from './components/ViewDetails/ViewDetails';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/product/:product_id',
        element:<ViewDetails></ViewDetails>,
        loader: ()=> fetch('/products.json')
      },
      {
        path: '/statics',
        element:<Statics></Statics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: ()=> fetch('/products.json'),
        children:[
          {
            path:'/dashboard/cart',
            element: <Cart></Cart>
          },
          {
            path:'/dashboard/wishlist',
            element: <Wishlist></Wishlist>
          }
        ]
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)


