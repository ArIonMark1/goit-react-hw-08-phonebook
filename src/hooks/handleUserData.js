import { useDispatch, useSelector } from 'react-redux';
import { useGetCurrentUserQuery, useUserLogOutMutation } from 'redux/features/userApi/authApi';
import { selectToken } from 'redux/features/userApi/selectors';
import { logOut } from 'redux/features/userApi/tokenSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// Святий хук, два дні над ним молився поки він не запрацював

export const HandleUserData = () => {
  const [logOutAction] = useUserLogOutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // перевіряємо чи є токен в стейті
  const isTokenReceived = useSelector(selectToken);


  // контролюємо запит по наявності токена, також при розриві інтернет з'єднання буде повторний запит
  const { data, isLoading, isSuccess, isError } =
    useGetCurrentUserQuery(isTokenReceived, {
      skip: !isTokenReceived,
      refetchOnReconnect: true,
    });
  if (!isTokenReceived) {
    return { data: null };
  }
  /*
  Як що помилка 
    1-сповіщаємо про невалідність даних 
    2-видаляє токен/логаут 
    3-перекидає на логін
  */
  if (isError) { 
    toast.error('Authorization Error. Try to relogin')
    logOutAction(isTokenReceived);
    dispatch(logOut());
    navigate('login');
  }

  return { data, isLoading, isSuccess };
};
