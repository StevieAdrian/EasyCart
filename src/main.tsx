import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateProduct from './pages/product'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
    // errorElement: <ErrorPage />
  },
  {
    path: "/create",
    element: <CreateProduct />
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>  
  </StrictMode>,
)
