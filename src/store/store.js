import { configureStore } from "@reduxjs/toolkit";
import { productsDataReducer } from "./slices/productsData/productsDataSlice";

const store = configureStore({
    reducer: {
        productsData: productsDataReducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()]
});

export default store;