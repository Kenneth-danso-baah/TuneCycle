import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PrivyUser } from "../../../../types/global.types";


const toISOStringSafe = (value: unknown): string | null | undefined => {
    if (value instanceof Date) {
        return value.toISOString();
    }
    if (typeof value === 'string') {
        return value;
    }
    return null;
};

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
                    createdAt: toISOStringSafe(action.payload.createdAt) || undefined,
                    email: action.payload.email ? { address: action.payload.email.address } : undefined,
                    linkedAccounts: action.payload.linkedAccounts?.map(account => ({
                        provider: account.provider, // or `type`
                        verifiedAt: toISOStringSafe(account.verifiedAt),
                    })) || [],
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