import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader';

const Layout = () => {
  return (
    <>
      <header className="header">
        <AppBar />
      </header>

      <Suspense fallback={<Loader />}>
        <ToastContainer />
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
