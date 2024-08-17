import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {wishlistActions} from '../../../redux/slices/wishlistsSlice'
import {cartActions} from '../../../redux/slices/CartSlice'
import {useDispatch} from 'react-redux'

const WishList_col = ({product}) => {
        const [imageSrc, setImageSrc] = useState(product.imgUrl);

    const dispatch = useDispatch();
    
  return (
<div className="col-lg-3 col-md-6">
        <div className="card">
            <div className="img-item">
                
           
        <Link to={`/Products/${product.id}`}>
                          <img
                  onMouseEnter={() => setImageSrc(product.imgUrlONhover)}
                  onMouseLeave={() => setImageSrc(product.imgUrl)}
                  src={imageSrc} alt="ddd" />
        </Link>
        </div>
        <div className="content-item">
                <Link to={`/Products/${product.id}`}><h3>{product.title}</h3></Link>
                <h4>{ product.categories }</h4>
                <span> ${product.price}</span>  

          <ul className='add_icon'>
            <li onClick={()=> dispatch(cartActions.addToCart(product))} className='cart'><i  className="fa-solid fa-cart-shopping"></i></li>
                        
            <li onClick={()=> dispatch(wishlistActions.removeFromWishlist(product))} className=' wish_delete'><i className="fa-solid fa-trash-can"></i></li> 


            <Link to={`/Products/${product.id}`}>
                <li className='search'><i className="fa-solid fa-magnifying-glass"></i></li>
            </Link>                          
            
          </ul>
                
        </div>                                      
    </div>
</div>  

  )
}

export default WishList_col