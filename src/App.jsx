import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import 'flowbite';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/register',
    element: (
      <>
        <Register />
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <>
        <Dashboard />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
