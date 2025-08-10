import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface IUser {
  email: string;
  name: string;
  role: string;
  profilePhoto?: string;
  lastLogin: Date;
  isActive: boolean;
}
interface TAuthState {
  user?: IUser | null;
  token?: string | null;
}

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: IUser; token: string }>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    setProfile: (state, action) => {
      if (state.user) {
        state.user.profilePhoto = action.payload;
      }
    },
    setRole: (state, action) => {
      if (state.user) {
        state.user.role = action.payload;
      }
    },
  },
});

export const { setUser, logout, setProfile, setRole } = authSlice.actions;
export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
