import { useSelector } from 'react-redux';
import { useGetCurrentUserQuery } from 'redux/features/userApi/authApi';
import { selectToken } from 'redux/features/userApi/selectors';
// Святий хук, два дні над ним молився поки він не запрацював

export const HandleUserData = () => {
  // перевіряємо чи є токен в стейті
  const isTokenReceived = useSelector(selectToken);

  // контролюємо запит по наявності токена, також при розриві інтернет з'єднання буде повторний запит
  const { data, isLoading, isSuccess } = useGetCurrentUserQuery(
    isTokenReceived,
    {
      skip: !isTokenReceived,
      refetchOnReconnect: true,
    }
  );
  if (!isTokenReceived) {
    return { data: null };
  }
  return { data, isLoading, isSuccess };
};
