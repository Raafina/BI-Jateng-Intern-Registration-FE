import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Admin/Dashboard';
import ApplicationDataPage from './pages/Admin/ApplicationData';
import ResultDataPage from './pages/Admin/ResultData';
import NotFound from './pages/404';

import NonProtected from './components/middlewares/NonProtected';
import Protected from './components/middlewares/Protected';

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
        <NonProtected>
          <Login />
        </NonProtected>
      </>
    ),
  },
  {
    path: '/beranda',
    element: (
      <Protected>
        <Dashboard />
      </Protected>
    ),
  },
  {
    path: '/data-pendaftar',
    element: (
      <Protected>
        <ApplicationDataPage />
      </Protected>
    ),
  },
  {
    path: '/hasil-seleksi',
    element: (
      <Protected>
        <ResultDataPage />
      </Protected>
    ),
  },
  {
    path: '*',
    element: (
      <>
        <NotFound />
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
