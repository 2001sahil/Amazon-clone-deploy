import { configureStore } from "@reduxjs/toolkit";
import {Slice} from "./CartSlice"
const Store=configureStore({
    reducer:{
        lelo:Slice,
    },
})
export default Store