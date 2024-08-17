import {productActions} from "../slices/products_slice";

// fetch products
export  function fetchProduct() {
    return async (dispatch) =>{
    
    try {
        dispatch(productActions.setLoading)
        const res = await fetch("http://localhost:4000/product");
        const data = await res.json();
        dispatch(productActions.getProducts(data));
        dispatch(productActions.clearLoading)
    } catch (error) {
        console.log(error);
        dispatch(productActions.clearLoading)
    }
    }
}


// git product id
export  function gitProductId(ProductId) {
    return async (dispatch) =>{
    
        try {
        dispatch(productActions.setLoading)
        const res = await fetch(`http://localhost:4000/product/${ProductId}`);
        const data = await res.json();
        dispatch(productActions.getProduct(data));
        dispatch(productActions.clearLoading)
    
    } catch (error) {
        console.log(error);
        dispatch(productActions.clearLoading)
            
    }
    }
}

export  function fetchRecommendedProduct() {
    return async (dispatch) =>{
    
        try {
        dispatch(productActions.setLoading)
        const res = await fetch("https://glitch.com/edit/#!/treasure-creative-pentagon/Recommended");
        const data = await res.json();
        dispatch(productActions.getProductRecommended(data));
        dispatch(productActions.clearLoading)        
    } catch (error) {
        console.log(error);
        dispatch(productActions.clearLoading)        
    }
    }
}

export  function fetchTopSelling() {
    return async (dispatch) =>{
    
        try {
        dispatch(productActions.setLoading)
        const res = await fetch("http://localhost:4000/Top_Selling");
        const data = await res.json();
        dispatch(productActions.getProducts(data));
        dispatch(productActions.clearLoading)                  
    } catch (error) {
        console.log(error);
        dispatch(productActions.clearLoading)      
    }
    }
}
