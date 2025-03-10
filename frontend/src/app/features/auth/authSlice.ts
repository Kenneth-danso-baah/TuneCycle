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
    loading: true, // Indicates if the auth state is being loaded
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Set the authentication state
        setAuthenticated(state, action: PayloadAction<boolean>) {
            state.isAuthenticated = action.payload;
            state.loading = false; // Auth state is resolved
        },

        // Set the user data (ensure createdAt remains a string or null)
        setUser(state, action: PayloadAction<PrivyUser | null>) {
            if (action.payload) {
                state.user = {
                    ...action.payload,
                    createdAt: action.payload.createdAt || null, // Ensure it's a string or null
                };
            } else {
                state.user = null;
            }
        },

        // Logout the user
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.loading = false;
        },

        // Set the loading state
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
    },
});

// Export actions
export const { setAuthenticated, setUser, logout, setLoading } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
