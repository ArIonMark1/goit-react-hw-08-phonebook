import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/features/userApi/selectors';

export const PublicRoute = ({ redirectTo = '/', component: Component }) => {
  const isToken = useSelector(selectToken);

  return isToken ? <Navigate to={redirectTo} replace /> : Component;
};
