import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";



// handel alert in wishlist 
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
  color:"#000",  
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




const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState: {
    wishlistsItems: localStorage.getItem("wishlistsItems") ?
      JSON.parse(localStorage.getItem("wishlistsItems"))
      : [],
  },
  reducers: {

    addToWishList: (state, action) => {
        let eachWishproductIndex = state.wishlistsItems.find((item) => item.id === action.payload.id);

      if (eachWishproductIndex) {
            handelAlert( "info" , "You cannot add this to wishlist anymore it is already added!" , "#D1E7DD" , "#fff")
        } else {
          state.wishlistsItems.push({...action.payload});
          localStorage.setItem("wishlistsItems", JSON.stringify(state.wishlistsItems))
            handelAlert( "success",  "Product Added To favorites" , "#CFE2FF" , "#fff")
        }
        },
      
      removeFromWishlist: (state, action) => { 
        state.wishlistsItems = state.wishlistsItems.filter((item) => item.id !== action.payload.id)
        localStorage.setItem("wishlistsItems", JSON.stringify(state.wishlistsItems))
        handelAlert( "success",  "product Removed From Wishlist" , "#F27474" , "#fff")
      },   
      
      clearWishlist: (state, action) => {
        state.wishlistsItems = [];
        localStorage.setItem("wishlistsItems", JSON.stringify(state.wishlistsItems))
        handelAlert( "success",  "Wishlist Cleared" , "#F27474" , "#fff")
      },

  },
});

const wishlistActions = wishlistSlice.actions;
const wishlistReducer = wishlistSlice.reducer;

export { wishlistReducer, wishlistActions };
