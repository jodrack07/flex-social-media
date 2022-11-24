import { createSlice } from "@reduxjs/toolkit";

interface PostStateType {
    likes: number
}

const initialState: PostStateType = {
    likes: 0
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        like: (state) => {
            state.likes += 1;
        },
        dislike: (state) => {
            state.likes -= 1;
        }
    }

});

export const { like, dislike } = postSlice.actions;

export default postSlice.reducer;
