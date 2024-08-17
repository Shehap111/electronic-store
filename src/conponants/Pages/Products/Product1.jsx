import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './product1.css'
import {useDispatch} from 'react-redux';
import {cartActions} from '../../../redux/slices/CartSlice';
import {wishlistActions} from '../../../redux/slices/wishlistsSlice';

const Product1 = ({product}) => {
        const [imageSrc, setImageSrc] = useState(product.imgUrl);
    const dispatch = useDispatch();

  return (
<div className="col-lg-4 col-md-6">
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
            
            <li onClick={()=> dispatch(wishlistActions.addToWishList(product))} className='wish_heart'><i className="fa-regular fa-heart"></i></li> 
            
            <Link to={`/Products/${product.id}`}>
              <li className='search'><i className="fa-solid fa-magnifying-glass"></i></li>
            </Link>
            
          </ul>
                
        </div>                                      
    </div>
</div>  

  )
}

export default Product1