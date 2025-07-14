import { configureStore } from "@reduxjs/toolkit";
import  CountSliceReducer  from "../Utils/utils";

const store = configureStore({
    reducer:{
        count : CountSliceReducer,
    }
})

export default store