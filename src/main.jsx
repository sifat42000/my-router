
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './home/Home';


import React from 'react';
import Mouse from './component/mouse/Mouse';
import Header from './component/header/Header';
import Users from './component/user/Users';
import Userdetails from './component/userdetails/Userdetails';
import Posts from './component/posts/Posts';
import PostDetails from './component/postdetails/PostDetails';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children:[
      {
        path:'/mouse',
        element:<Mouse></Mouse>
      },
      {
        path:'/header', 
        element:<Header></Header>
      },
      {
        path:'/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/user/:userid',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        element:<Userdetails></Userdetails>  
      },
      {
        path :'/posts',
        loader : () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path :'/post/:postId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element : <PostDetails></PostDetails>
      }
    ]
  },
  
  
 
 
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>
);
