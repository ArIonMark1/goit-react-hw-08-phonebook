import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApiSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://api.escuelajs.co/api/v1',
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token.token;
      console.log(' getState: ', getState());
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['authentication'],
  endpoints: builder => ({
    //
    userRegister: builder.mutation({
      query: newCredential => ({
        // url: '/users/',
        url: '/users/signup/',
        method: 'POST',
        body: newCredential,
      }),
      invalidatesTags: ['authentication'],
    }),
    //
    userLogin: builder.mutation({
      query: credential => ({
        // url: '/auth/login/',
        url: '/users/login',
        method: 'POST',
        body: credential, // user data object
      }),
      invalidatesTags: ['authentication'],
    }),
    //
    // userLogOut: builder.mutation({
    //   query: id => ({
    //     url: `/users/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['authentication'],
    // }),
    //
    getCurrentUser: builder.query({
      // query: () => '/auth/profile/',
      query: () => '/users/current',
      providesTags: ['authentication'],
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useGetCurrentUserQuery,
} = authApiSlice;
