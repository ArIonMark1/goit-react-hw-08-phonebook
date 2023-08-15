import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { HandleUserData } from 'hooks/handleUserData';
import { selectToken } from 'redux/features/userApi/selectors';

export const RestrictedRoute = ({ redirectTo = '/', component: Component }) => {
  const isToken = useSelector(selectToken);
  // const { isSuccess } = HandleUserData();

  return isToken ? <Navigate to={redirectTo} /> : Component;
};
