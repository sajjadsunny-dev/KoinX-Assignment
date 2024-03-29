import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cryptocurrencies from './page/Cryptocurrencies/Cryptocurrencies.jsx';
import Bitcoin from './page/Bitcoin/Bitcoin.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Cryptocurrencies />,
  },
  {
    path: "/bitcoin",
    element: <Bitcoin />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
