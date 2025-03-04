import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/userdetailSlice";
import signupSlice from "../features/userdetailSlice";

export const store = configureStore({
    reducer: {
        app: userDetail,
        app: signupSlice,
    }
});