import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// https://dummyjson.com/products
const initialState = {
    products: [],
    ProductById: {},
    isError: false,
    errorMessage: "",
    isLoding: false
}

export const fetchProducts = createAsyncThunk("fetchProducts", async()=> {
    console.log("first fetch")
    const products = await axios.get("https://dummyjson.com/products")
    return products
});

export const fetchProductById = createAsyncThunk("fetchProductById", async(id)=> {
    const product = await axios.get(`https://dummyjson.com/products/${id}`)
    return product
});

export const updateProduct = createAsyncThunk("udpateproduct", async({title, desc, image, brand, pid})=> {
    console.log("first update")
    console.log(title, desc, image, brand, pid)
    const res = await axios.put(`https://dummyjson.com/products/${pid}`, {title, description: desc, thumbnail: image, brand})
    console.log("res from productSclice", res)
    return res
})




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
        builder.addCase(fetchProductById.fulfilled, (state, action)=> {
            state.ProductById = action.payload.data
        })
        builder.addCase(fetchProductById.rejected, (state, action)=> {
            state.isError = true
            state.errorMessage = action.error.message
        })
        builder.addCase(fetchProductById.pending, (state)=> {
            state.isLoding = true
        })
        builder.addCase(updateProduct.fulfilled, (state, action)=> {
            console.log("Update proudct filfiled.....")
            state.ProductById = action.payload.data
            state.isError = false
        })
        builder.addCase(updateProduct.rejected, (state, action)=> {
            console.log("error come")
            state.isError = true
            state.errorMessage = action.error.message
        })
        builder.addCase(updateProduct.pending, (state)=> {
            state.isLoding = true
        })
    }
})


export default productSlice.reducer