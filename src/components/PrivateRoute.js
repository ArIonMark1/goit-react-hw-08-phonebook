import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/features/userApi/selectors';

export const PrivateRoute = ({
  redirectTo = '/login',
  component: Component,
}) => {
  const isToken = useSelector(selectToken);

  return !isToken ? <Navigate to={redirectTo} /> : Component;
};
