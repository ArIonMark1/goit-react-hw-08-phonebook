import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

export const authReducer = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      console.log('token from slice: ', action.payload);
      state.token = action.payload;
    },
    logOut: state => {
      state.token = null;
    },
  },
});

export const { setToken, logOut } = authReducer.actions;
// export const tokenReducer = authReducer.reducer;

/*
https://connections-api.herokuapp.com/users/signup


curl -X POST "https://connections-api.herokuapp.com/users/signup" -H  "accept: *
/*
  " -H  "Content - Type: application / json" -d "{
\"name\":\"Adrian Cross\",\"email\":\"across@mail.com\",\"password\":\"examplepwd12345\"}"
*/
