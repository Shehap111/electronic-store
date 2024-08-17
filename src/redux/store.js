import {configureStore} from "@reduxjs/toolkit";
import {productReducer} from "./slices/products_slice";
import {cartReducer} from "./slices/CartSlice";
import {wishlistReducer} from "./slices/wishlistsSlice";

const Store = configureStore({
    reducer: {
        product: productReducer, 
        Cart : cartReducer,
        wishlist : wishlistReducer

    }
});

export default Store;