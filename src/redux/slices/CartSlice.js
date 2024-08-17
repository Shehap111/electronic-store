import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

// handel alert in cart  
const handelAlert = (icon , title , background , iconColor) => {
 const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-start',
  showConfirmButton: false,
  timer:   3000,
  background: background,
  iconColor:iconColor,
  timerProgressBar: true,
  width: 'auto',
  color: "#000",
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
 })
Toast.fire({
  icon: icon,
  title:title 
})
}







const CartSlice = createSlice({
    name: "CartItems",
    initialState: {
      CartItems: localStorage.getItem("CartItems") ?
      JSON.parse(localStorage.getItem("CartItems"))
      : [],
        
    },
    reducers: {
           addToCart: (state, action) => {
      const itemInCart = state.CartItems.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
        localStorage.setItem("CartItems", JSON.stringify(state.CartItems))
        handelAlert("success" , "Increased Product Quantity" , "#D1E7DD" , "#fff")
      } else {
        state.CartItems.push({...action.payload, quantity: 1});
        localStorage.setItem("CartItems", JSON.stringify(state.CartItems))
        handelAlert("success" , "Product Added To Cart" , "#CFE2FF" , "#fff")
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.CartItems.find((item) => item.id === action.payload);
      item.quantity++;
      localStorage.setItem("CartItems", JSON.stringify(state.CartItems))
        handelAlert("success" , "Increased Product Quantity" , "#D1E7DD" , "#fff")
        },
      
    decrementQuantity: (state, action) => {
      const item = state.CartItems.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        const removeItem = state.CartItems.filter((item) => item.id !== action.payload);
        state.CartItems = removeItem;
                localStorage.setItem("CartItems", JSON.stringify(state.CartItems))
        handelAlert("success" , " Product Removed From Cart" , "#F27474" , "#fff")
      } else {
        item.quantity--;
        localStorage.setItem("CartItems", JSON.stringify(state.CartItems))
        handelAlert("success" , "Decreased Product Quantity" , "#D1E7DD" , "#fff")

      }
    },

 removeItem: (state, action) => {
      const removeItem = state.CartItems.filter((item) => item.id !== action.payload);
   state.CartItems = removeItem;
           localStorage.setItem("CartItems", JSON.stringify(state.CartItems))
        handelAlert("success" , " Product Removed From Cart" , "#F27474" , "#fff")
        },
 clear: (state) => {
        state.CartItems = [] 
        handelAlert("success" , " Cart Cleared" , "#F27474" , "#fff")
        }, 
 
    }
})


const cartActions = CartSlice.actions
const cartReducer = CartSlice.reducer

export {cartActions , cartReducer}