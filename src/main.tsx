import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.scss'
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router";
import App from './App.tsx'

const route = (path: string, component: React.ComponentType): RouteObject => ({path: path, Component: component});

const router = createBrowserRouter([
  route("/", App),
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
