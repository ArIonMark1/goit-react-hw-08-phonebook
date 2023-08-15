import { Navigate } from 'react-router-dom';
import { HandleUserData } from 'hooks/handleUserData';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isSuccess } = HandleUserData();

  return isSuccess ? <Navigate to={redirectTo} /> : Component;
};
