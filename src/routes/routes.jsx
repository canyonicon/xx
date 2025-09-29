import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Importing components
import App from '../App.jsx'
import Flights from '../public/pages/flights/Flights.jsx'
import Schedule from '../public/pages/schedule/Schedule.jsx';
import Contact from '../public/pages/contact/Contact.jsx';
import Gallery from '../public/pages/gallery/Gallery.jsx';
import About from '../public/pages/about/About.jsx';
import Blog from '../public/pages/blog/Blog.jsx';
import BlogDetail from '../public/pages/blog/BlogDetail.jsx';
import Register from '../public/pages/auth/Register.jsx';
import Login from '../public/pages/auth/Login.jsx';
import Home from '../public/pages/home/Home.jsx';

import E404 from '../public/pages/E404.jsx';

// admin routes
import Layout from '../admin/Layout.jsx';
import Dashboard from '../admin/pages/dashboard/Dashboard';
import Customers from '../admin/pages/customers/Customers';
import Customer from '../admin/pages/customers/Customer';
import FlightList from '../admin/pages/flight/FlightList.jsx';
import AdminBooking from '../admin/pages/booking/AdminBooking.jsx';
import PlaneList from '../admin/pages/plane/PlaneList.jsx';
import RouteList from '../admin/pages/route/RouteList.jsx';
import BookingList from '../admin/pages/booking/BookingList.jsx';
import AirportList from '../admin/pages/airport/AirportList.jsx';
import EmployeeList from '../admin/pages/employee/EmployeeList.jsx';
import EmailHost from '../admin/pages/settings/EmailHost.jsx';
import SMSList from '../admin/pages/settings/SMSList.jsx';


const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/flights",
    element: <Flights />,
  },
  {
    path: "/flights-schedule",
    element: <Schedule />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog-detail",
    element: <BlogDetail />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin/dashboard",
    element: <Layout>
        <Dashboard />
      </Layout>
  },
  {
    path: "/admin/customers",
    element: <Layout>
        <Customers />
      </Layout>,
  },
  {
    path: "/admin/customer/:id",
    element: <Layout>
        <Customer />
      </Layout>,
  },
  {
    path: "/admin/flights",
    element: <Layout>
        <FlightList />
      </Layout>,
  },
  {
    path: "/admin/flight/booking/:id",
    element: <Layout>
        <AdminBooking />
      </Layout>,
  },
  {
    path: "/admin/bookings",
    element: <Layout>
        <BookingList />
      </Layout>,
  },
  {
    path: "/admin/planes",
    element: <Layout>
        <PlaneList />
      </Layout>,
  },
  {
    path: "/admin/routes",
    element: <Layout>
        <RouteList />
      </Layout>,
  },
  {
    path: "/admin/airports",
    element: <Layout>
        <AirportList />
      </Layout>,
  },
  {
    path: "/admin/employees",
    element: <Layout>
        <EmployeeList />
      </Layout>,
  },
  {
    path: "/admin/ehost",
    element: <Layout>
      <EmailHost />
    </Layout>,
  },
  {
    path: "/admin/sms",
    element: <Layout>
      <SMSList />
    </Layout>,
  },
  {
    path: "*",
    element: <E404 />,
  }

];

export default createBrowserRouter(routes);