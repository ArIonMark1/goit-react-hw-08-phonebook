import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApiSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.escuelajs.co/api/v1',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authToken.token;
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
        url: '/users/',
        method: 'POST',
        body: newCredential,
      }),
      invalidatesTags: ['authentication'],
    }),
    //
    userLogin: builder.mutation({
      query: credential => ({
        url: '/auth/login/',
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
      query: () => '/auth/profile/',
      providesTags: ['authentication'],
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useGetCurrentUserQuery,
} = authApiSlice;
