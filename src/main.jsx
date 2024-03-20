import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Root from "./routes/root"
import ErrorPage from "./error-page"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from "./routes/about"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/AboutMe",
        element: <AboutMe />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
