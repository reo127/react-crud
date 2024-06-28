import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// https://dummyjson.com/products
const initialState = {
    products: [],
    isError: false,
    errorMessage: "",
    isLoding: false
}

export const fetchProducts = createAsyncThunk("fetchProducts", async()=> {
    const products = await axios.get("https://dummyjson.com/products")
    return products
});


export const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action)=> {
            state.products = action.payload.data.products
            state.isLoding = false
        })
        builder.addCase(fetchProducts.rejected, (state, action)=> {
            state.isError = true
            state.errorMessage = action.error.message
            state.isLoding = false
        })
        builder.addCase(fetchProducts.pending, (state)=> {
            state.isLoding = true
        })
    }
})


export default productSlice.reducer