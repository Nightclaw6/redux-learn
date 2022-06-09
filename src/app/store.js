// import counterReducer from "../features/counter/counterSlice";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";

export const store = configureStore({
    reducer: {
        // counter: counterReducer,
        posts: postsReducer,
    }
})