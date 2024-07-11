import { configureStore } from "@reduxjs/toolkit";
import { nameSlice } from "./slices/nameSlice";


const store = configureStore({
    reducer: {
        names: nameSlice.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>;

export default store