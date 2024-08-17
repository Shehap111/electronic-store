import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom'
import {gitProductId} from '../../../redux/apiCalls/product_api';
import Spinner from '../spinner/Spinner';
import './Products.css'
import Intro from '../../intro_sections/Intro';
import {cartActions} from '../../../redux/slices/CartSlice';
import {wishlistActions} from '../../../redux/slices/wishlistsSlice';
const Singel_product = () => {

    const dispatch = useDispatch();
    const {product , loading} = useSelector(state => state.product)

 
    const {id} = useParams();

    useEffect(()=>{
        dispatch(gitProductId(id))
        window.scrollTo(0,0)
    }, [id])

if (loading) return <Spinner/>
  return (
      <>
                <Intro name='Product Details' link="Details"/>

            <div className='Singel_product'>
          <div className="container">
              <div className="row">
                  <div className="col-lg-4 col-md-4">
                      <img src={product?.imgUrl} alt="img" />
                  </div>

                  <div className="col-lg-8 col-md-8">
                      <h5>Categories ({product?.categories})</h5>
                      <h3>{product?.title}</h3>
                      <span> ${product?.price} + Free Shipping</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam voluptatem sapiente nulla eum dolores! Nostrum sequi vero sapiente atque, repellat quasi, architecto ipsam molestias laborum harum unde labore dicta eligendi.</p>
                      <button onClick={()=> dispatch(cartActions.addToCart(product))} className='aa'> Add To Cart</button>
                      <button onClick={()=> dispatch(wishlistActions.addToWishList(product))} className='aa'><i className="fa-regular fa-heart"></i> </button>

                      </div>

                  <div className="col-lg-6 mt-5">
                      <h3>More about the product</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, similique. Iste explicabo repudiandae sint, aliquid debitis odio consequuntur nemo corporis exercitationem. Quasi omnis fugit libero quisquam, quia hic officia laboriosam.</p>
                  
                  </div>

                  
                  <div className="col-lg-6 mt-5">
                      <h3>Description</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore repellat nostrum, ut quos voluptatum sint voluptatem dignissimos natus ea exercitationem, a saepe eligendi quia vitae ad aliquid ipsam quidem esse!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore repellat nostrum, ut quos voluptatum sint voluptatem dignissimos natus ea exercitationem, a saepe eligendi quia vitae ad aliquid ipsam quidem esse!</p>
  
                  </div>
                  
              </div>
          </div>
      </div>
      
      </>
  )
}

export default Singel_product