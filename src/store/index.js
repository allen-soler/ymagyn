import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
import productSlice from "./product-slice";
import userSlice from "./user-slice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        user: userSlice.reducer,
        cart: cartSlice.reducer,
        products: productSlice.reducer
    }
});

export default store;