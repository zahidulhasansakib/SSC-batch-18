import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/Error/ErrorPage';
import MyProfile from '../pages/MyProfile';
import Service from '../pages/Service';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PrivateRoute from '../privateRoute/PrivateRoute';
import ServiceDetails from '../pages/ServiceDetails';
import ForgotPassword from '../pages/ForgotPassword';
import Gallery from '../pages/Gallery';
import Reunion from '../pages/Reunion';
import BiddayOnusthan from '../pages/BiddayOnusthan';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "/profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/services",
        element: <Service></Service>,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/gallery",
        element: (
          <PrivateRoute>
            <Gallery></Gallery>
          </PrivateRoute>
        ),
      },
      {
        path: "/gallery/reunion",
        element: (
          <PrivateRoute>
            <Reunion />
          </PrivateRoute>
        ),
      },
      {
        path: "/gallery/bidayonusthan",
        element: (
          <PrivateRoute>
            <BiddayOnusthan />
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);
