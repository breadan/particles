import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Parent from './Components/Parent/Parent';
import NotFound from './Components/NotFound/NotFound';
import Mobile from './Components/Mobile/Mobile';
import Cart from './Components/Cart/Cart';
import Contact from './Components/Contact/Contact';
import {HookRef} from './Components/HookRef/HookRef';
import FormRef from './Components/FormRef/FormRef.tsx';


let routers =  createBrowserRouter([
{path: '', element: <Layout/>, children: [
  {index:true, element: <Home/>},
  {path: 'about', element: <About/>, children: [
    {path: 'mobile', element: <Mobile/>},
    {path: 'hookRef', element: <HookRef/>},
    {path: 'formRef', element: <FormRef/>},
  ]},
  {path: 'gallery', element: <Gallery/>},
  {path: 'parent', element: <Parent/>},
  {path: 'cart', element: <Cart/>},
  {path: 'contact', element: <Contact/>},

  {path: '*', element: <NotFound/>},
] }





])
export default function App() {
  return <RouterProvider router={routers}>
  </RouterProvider>
}
