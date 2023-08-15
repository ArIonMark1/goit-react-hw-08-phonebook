import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/features/userApi/selectors';

export const PrivateRoute = ({ redirectTo = '/login' }) => {
  const isToken = useSelector(selectToken);

  return isToken ? <Outlet /> : <Navigate to={redirectTo} replace />;
};
