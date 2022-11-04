import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../state/ProductSlice";
export default configureStore({
    reducer:{
        product:productReducer,
    }
})