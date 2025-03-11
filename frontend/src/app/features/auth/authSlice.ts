import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PrivyUser } from '../../../../types/global.types';

interface AuthState {
    isAuthenticated: boolean;
    user: PrivyUser | null;
    loading: boolean;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    loading: true,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
  
        setAuthenticated(state, action: PayloadAction<boolean>) {
            state.isAuthenticated = action.payload;
            state.loading = false; 
        },

        setUser(state, action: PayloadAction<PrivyUser | null>) {
            if (action.payload) {
                state.user = {
                    ...action.payload,
                    createdAt: action.payload.createdAt || null, 
                };
            } else {
                state.user = null;
            }
        },

        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.loading = false;
        },

   
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
    },
});


export const { setAuthenticated, setUser, logout, setLoading } = authSlice.actions;


export default authSlice.reducer;
