import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Navigate } from 'react-router-dom';

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

          <Route
            path="/registration"
            element={
              <PublicRoute
                redirectTo={'/'}
                component={<RegisterPage />}
              ></PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                redirectTo={'/'}
                component={<LoginPage />}
              ></PublicRoute>
            }
          />
          <Route element={<PrivateRoute redirectTo="/login" />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </div>
  );
};
