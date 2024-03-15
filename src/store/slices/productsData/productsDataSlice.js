import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsData } from "./API";

const productsDataSlice = createSlice({
    name: "productsData",
    initialState: {
        data: [],
        isLoading: false
    },
    reducers: {
        getProductsData (state, action) {
            return {
                ...state,
                data: action.payload
            }
        },

        filterByColor (state, {payload}) {
            const color = state.data.filter((el) => el.color === payload);
           console.log(color)
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchProductsData.pending, (state, {payload}) => {
            console.log("pending...")
            state.isLoading = true;
        })
        .addCase(fetchProductsData.fulfilled, (state, {payload}) => {
            return {
                ...state,
                productsData: payload,
                isLoading: false
            }
        })
        .addCase(fetchProductsData.rejected, () => {
            console.error("տվյալների սխալ")
        })
    }
})

export const selectProductsData = (state) => state.productsData;
export const selectisLoading = ((state) => state.productsData.isLoading);
export const {getProductsData, filterByColor} = productsDataSlice.actions;
export const productsDataReducer = productsDataSlice.reducer;