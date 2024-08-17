import './Products.css'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Intro from '../../intro_sections/Intro'
import {removeItemFromCart} from '../../../redux/apiCalls/CartCalls';
import {cartActions} from '../../../redux/slices/CartSlice';
import {Link} from 'react-router-dom';

const CartPage = ({product}) => {
const { CartItems } = useSelector(state => state.Cart)

        const dispatch = useDispatch();

const getTotal = () => {
  let totalQuantity = 0
  let totalPrice = 0
  CartItems.forEach(item => {
    totalQuantity += item.quantity
    totalPrice += item.price * item.quantity
  })
  return {totalPrice, totalQuantity}
    }
    

if (CartItems.length <= 0) { 

    return (
    <>
        <Intro name='Cart' link="Cart"/>

        <h2 className='pt-5 text-center'>
            No Products In Cart
        </h2>
    </>
    )
} else {
        return (
      

    
        <div>
                <Intro name='Cart' link="Cart"/>

            <section className="Cart_page">
                

    <div className="container">
        <table className="table table-bordered text-center mt-3">
        <thead className="bg-dark text-light">
            <tr>
            <th scope="col">Product</th>
            <th scope="col">Product name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Remove</th>
        </tr>
    </thead>
                    
    <tbody>
        {
        CartItems.map((product) => {
        return (
        <tr key={product.id}>
            <td><Link to={`/Products/${product.id}`}><img src={product.imgUrl} alt="" /></Link></td>
            <td>{product.title}</td>
            <td>${product.price}</td>
            <td className='quantity'>
                <button className='btn btn-secondary btn_cart' onClick={() => dispatch(cartActions.incrementQuantity(product.id))}>+</button>
                    <span>{product.quantity }</span>
                    <button className='btn btn-secondary btn_cart' onClick={() => dispatch(cartActions.decrementQuantity(product.id))}>-</button>
            </td>
            <td> ${product.price * product.quantity}  </td>
            <td><button className=" btn btn-danger " onClick={() => dispatch(cartActions.removeItem(product.id))}><i className="fa-solid fa-xmark"></i></button></td>
                            
        </tr>
                )
            })
        }


    </tbody>
    </table>
        <button className='clear' onClick={() => dispatch(cartActions.clear())}>
                        Clear All Item
        </button>







            </div>






            </section>     

            <section className='CART_SUBTOTAL_container'>

                
            <div className='container'>

                    <div className='row'>  
        <div className='col-lg-6'>
           
        <div className='CART_SUBTOTAL mt-5 pt-3'>
                <h3>CART SUBTOTAL</h3>           
             <table className="table table-bordered text-center mb-5">
                <tbody>
                    <tr>
                        <td>Order Subtotal</td>
                <td>
                    <p className="total__p">
                    total ({getTotal().totalQuantity} items) 
                    : <strong>${getTotal().totalPrice}</strong>
                    </p>
                </td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>Free Shipping</td>
                    </tr>

                    <tr>
                        <td>Coupon</td>
                        <td>$0</td>
                    </tr>

                    <tr>
                        <td>Total</td>
                      
                    <td>{<strong>${getTotal().totalPrice}</strong>}</td>

                </tr>
                </tbody>
            </table>
      
                            
             <Link  to="/Checkout"> Checkout Now </Link>
                   
</div>                           
</div>  
    </div> 
            </div>
            </section>
            


    </div>
  )
}

}

export default CartPage