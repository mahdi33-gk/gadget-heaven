import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './Root.jsx'
import Home from './Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Err from './Err.jsx'
import Dashboard from './Dashboard.jsx'
import ProductDetail from './ProductDetail.jsx'
import Statistics from './Statistics.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Err></Err>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/product/:productId',
        element: <ProductDetail></ProductDetail>,
        loader: ()=> fetch('/datas.json')
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path:'statisitcs',
        element: <Statistics></Statistics>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
