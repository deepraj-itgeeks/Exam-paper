import { configureStore } from "@reduxjs/toolkit";
import MasterSlice from "./MasterSlice";
import ApiSlice from "./ApiSlice";

const store = configureStore({
    reducer:{
        masterData: MasterSlice,
        masterApi: ApiSlice,

    }
})

export default store;