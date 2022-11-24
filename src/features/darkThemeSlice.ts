import { createSlice } from "@reduxjs/toolkit";

type DarkThemeState = {
    darkTheme: boolean
}

const KEY = 'DARK_THEME';
const data = localStorage.getItem(KEY);

const initialState: DarkThemeState = {
    darkTheme: data ? JSON.parse(data) : false
}

const darkThemeSlice = createSlice({
    name: 'darkTheme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkTheme = !state.darkTheme;
        }
    }
})

export const { toggleTheme } = darkThemeSlice.actions;
export default darkThemeSlice.reducer;
