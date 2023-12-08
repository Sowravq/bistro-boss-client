import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
 import MenuPage from "../Pages/MenuPage/MenuPage";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Secret from "../Pages/Secret/Secret";
import Dashboard from "../layout/Dashboard";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AddReview from "../Pages/Dashboard/AddReview/AddReview";
import MyBooking from "../Pages/Dashboard/MyBooking/MyBooking";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItam from "../Pages/Dashboard/AddItam/AddItam";
import AdminRoute from "../PrivateRoute/AdminRoute";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
        path:'/',
        element:<Home></Home>
        },
        {
          path:'/menu',
          element:<MenuPage></MenuPage>
          
        },
        {
          path:'/ourShop',
          element:<OurShop></OurShop>
        },
        {
          path:'/ourShop/:category',
          element:<OurShop></OurShop>
        },
        {
          path:'/secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
      
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/singUp',
      element:<SingUp></SingUp>
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'/dashboard',
          element:<UserHome></UserHome>
        },
        {
          path:'/dashboard/reservation',
          element:<Reservation></Reservation>
        },
        {
          path:'/dashboard/paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },
        {
         path:'/dashboard/myCart',
         element:<MyCart></MyCart>
        },
        {
          path:'/dashboard/addReview',
          element:<AddReview></AddReview>
        },
        {
          path:'/dashboard/myBooking',
          element:<MyBooking></MyBooking>
        },


        //admin-----
        {
           path:'/dashboard/addItems',
           element:<AdminRoute><AddItam></AddItam></AdminRoute>
        },
        {
          path:'/dashboard/manageItems',
          element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
        },
        {
          path:'/dashboard/allUsers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);

  export default router