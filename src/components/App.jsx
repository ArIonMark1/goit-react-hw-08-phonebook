import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/registration" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <p>Page not Found.</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
};
