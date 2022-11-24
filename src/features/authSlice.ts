import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IUser } from '../types/user';

type AuthStateType = {
  user: IUser;
};

const initialState: AuthStateType = {
  user: {
    id: 1,
    username: 'john doe',
    password: '124555',
    friends: [],
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVwbY7kNk0U_tKux19D52m1bn6sbt8jF5e7g&usqp=CAU'
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
        state.user = action.payload
    }
  }
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
