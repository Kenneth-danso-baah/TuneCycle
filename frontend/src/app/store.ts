import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../app/features/auth/authSlice';
import searchReducer from '../app/features/search/searchSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        search: searchReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
