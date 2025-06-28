import { configureStore } from "@reduxjs/toolkit";
import likeReducer from '../features/LikeSlice';

export const store = configureStore({
    reducer :{
        like: likeReducer,
    }
})