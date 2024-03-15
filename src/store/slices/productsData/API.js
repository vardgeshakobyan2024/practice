import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductsData = createAsyncThunk("productsData/createProductsData", async () => {
    const result = await fetch('http://localhost:3005/sneakersData');
    const jsonResult = result.json();
    return jsonResult
});