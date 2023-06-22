import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../layouts/Main/Main';
import Home from '../pages/Home/Home/Home';
import ErrorPage from '../layouts/Error/ErrorPage';
import Login from '../pages/SingUpIn/Login/Login';
import Register from '../pages/SingUpIn/Register/Register';
import Blog from '../pages/Bolg/Blog';
import AllToys from '../pages/AllToys/AllToys';
import PrivateRoute from './PrivateRoute';
import ToyDetails from '../pages/ToyDetails/ToyDetails';
import AddAToy from '../pages/AddAToy/AddAToy';
import MyToys from '../pages/MyToys/MyToys';
import UpdateToy from '../pages/UpdateToy/UpdateToy';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/toys',
                element: <AllToys></AllToys>,
                loader: () => fetch(`https://fusion-toys-server.vercel.app/toys?limit=${20}`)
            },
            {
                path: '/toys/only/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://fusion-toys-server.vercel.app/toys/only/${params.id}`)
            },
            {
                path: '/add-a-toys',
                element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
            },
            {
                path: '/my-toys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
                loader: ({ params }) => fetch(`https://fusion-toys-server.vercel.app/toys/only/${params.id}`)
            }
        ]
    },
]);

export default router;