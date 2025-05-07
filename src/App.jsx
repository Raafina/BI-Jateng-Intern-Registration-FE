import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterSuccess from './pages/Register/RegisterSuccess';
// import Dashboard from './pages/Admin/Dashboard';
import ApplicationDataPage from './pages/Admin/ApplicationData';
import ResultDataPage from './pages/Admin/ResultData';
import WeightDataPage from './pages/Admin/WeightData';
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
    path: '/daftar',
    element: (
      <>
        <Register />
      </>
    ),
  },
  {
    path: '/pendaftaran-sukses',
    element: (
      <>
        <RegisterSuccess />
      </>
    ),
  },
  {
    path: '/admin/login',
    element: (
      <>
        <NonProtected>
          <Login />
        </NonProtected>
      </>
    ),
  },
  // {
  //   path: '/admin/beranda',
  //   element: (
  //     <Protected>
  //       <Dashboard />
  //     </Protected>
  //   ),
  // },
  {
    path: '/admin/data-pendaftar',
    element: (
      <Protected>
        <ApplicationDataPage />
      </Protected>
    ),
  },
  {
    path: '/admin/hasil-seleksi',
    element: (
      <Protected>
        <ResultDataPage />
      </Protected>
    ),
  },
  {
    path: '/admin/bobot',
    element: (
      <Protected>
        <WeightDataPage />
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
