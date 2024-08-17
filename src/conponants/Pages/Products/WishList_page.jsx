import React, {useState} from 'react'
import Intro from '../../intro_sections/Intro'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import WishList_col from './WishList_col'
import {wishlistActions} from '../../../redux/slices/wishlistsSlice'

const WishList_page = () => {


const { wishlistsItems } = useSelector(state => state.wishlist)

    const dispatch = useDispatch();
    


    if (wishlistsItems.length <= 0) {
        return (
                    <>
        <Intro name='WishList' link="WishList"/>

        <h2 className=' pt-5 text-center'>
            No Products In WishList
        </h2>
        </>
        )
    } else {
  return (
      <div>
                <Intro name='WishList' link="WishList"/>
          
        <div className="Wishlist">
              <div className="container">
                  <div className="row">
                      {
                          wishlistsItems.map((product) => {
                              return (
                                <WishList_col key={product.id} product={ product } />
                              )
                          })


                      }



        <button className='clear mt-5' onClick={() => dispatch(wishlistActions.clearWishlist())}>
                        Clear All Item
        </button>


              </div>
              </div>  
        </div>


    </div>
        )    
    }

    
}


export default WishList_page