import { configureStore } from "@reduxjs/toolkit";
import reduxReducer from "./reduxToolkit";

const configStore = configureStore({
    reducer: { cartlist: reduxReducer },
});

export default configStore;