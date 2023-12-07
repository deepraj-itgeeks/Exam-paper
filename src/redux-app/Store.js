import { configureStore } from "@reduxjs/toolkit";
import MasterSlice from "./MasterSlice";

const store = configureStore({
    reducer:{
        masterData: MasterSlice,

    }
})

export default store;