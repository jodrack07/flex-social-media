import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import darkThemeReducer from "../features/darkThemeSlice";
import postReducer from "../features/postSlice";

export const store = configureStore({
    reducer: {
        darkTheme: darkThemeReducer,
        auth: authReducer,
        post: postReducer
    }
});

// infer the #RootState# and #AppDispatch# types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;