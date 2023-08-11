import { Outlet } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import AppBar from 'components/AppBar';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useGetCurrentUserQuery } from 'redux/features/authApi/authApi';

const Layout = () => {
  return (
    <>
      <header className="header">
        <AppBar />
      </header>

      <Suspense
        fallback={
          <div className="loaderBlock">
            <SyncLoader
              color="steelblue"
              cssOverride={{
                margin: '0 auto',
              }}
              size={18}
            />
          </div>
        }
      >
        <ToastContainer />
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
