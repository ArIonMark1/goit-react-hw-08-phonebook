import { Outlet } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import AppBar from 'components/AppBar';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <AppBar />
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
            <p>Loading content...</p>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
