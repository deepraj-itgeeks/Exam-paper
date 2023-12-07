
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export  const fetchapi = createAsyncThunk("fetchapi", async () => {
     const res = await axios.get("https://dummyjson.com/products?limit=10")
     res.then((response)=>{
        return response.data.products
     }).then((result)=>{
        console.log(result)
     })
});

const slice = createSlice({
    name: "todo",
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchapi.pending, (state, action) => {
            state.isLoading = true;
            state.status = "loading"
            state.data = fetchapi
        })
        builder.addCase(fetchapi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.status = "success"
            state.data = fetchapi
        })
        builder.addCase(fetchapi.rejected, (state, action) => {
            state.isError = true;
            state.status = "failed"
            state.data = fetchapi
        })
    }
})

export default slice.reducer
