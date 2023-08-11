// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetCurrentUserQuery } from 'redux/features/authApi/authApi';
// Святий хук, два дні над ним молився поки він не запрацював

export const HandleUserData = () => {
  // перевіряємо чи є токен в стейті
  const isToken = state => state.authToken.token;
  const controlState = useSelector(isToken);
  // контролюємо запит по наявності токена, також при розриві інтернет з'єднання буде повторний запит
  const { data, isLoading, isSuccess } = useGetCurrentUserQuery(controlState, {
    skip: !controlState,
    refetchOnReconnect: true,
  });
  if (!controlState) {
    return { data: null };
  }
  return { data, isLoading, isSuccess };
};
