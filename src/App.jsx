import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/ApplicationForm';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
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
    path: '/beranda',
    element: (
      <>
        <Dashboard />
      </>
    ),
  },
]);

function App() {
  return (
    <Provider store={store}>
      <main>
        <RouterProvider router={router} />
        <ToastContainer theme="colored" />
      </main>
    </Provider>
  );
}

export default App;
