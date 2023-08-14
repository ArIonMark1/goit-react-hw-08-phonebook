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
  tagTypes: ['authentication', 'contacts'],
  endpoints: builder => ({
    //
    userRegister: builder.mutation({
      query: newCredential => ({
        url: '/users/signup/',
        method: 'POST',
        body: newCredential,
      }),
      invalidatesTags: ['authentication'],
    }),
    //
    userLogin: builder.mutation({
      query: credential => ({
        url: '/users/login',
        method: 'POST',
        body: credential, // user data object
      }),
      invalidatesTags: ['authentication'],
    }),
    //
    userLogOut: builder.mutation({
      // LOGOUT
      query: () => ({
        url: 'users/logout',
        method: 'POST', // ??????????????????????????????????
      }),
      invalidatesTags: ['authentication'],
    }),
    //
    getCurrentUser: builder.query({
      query: () => '/users/current',
      providesTags: ['authentication'],
    }),
    //
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['contacts'],
    }),
    createContact: builder.mutation({
      query: contactData => ({
        url: '/contacts',
        method: 'POST',
        body: contactData,
      }),
      invalidatesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useGetCurrentUserQuery,
  useGetContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = authApiSlice;
