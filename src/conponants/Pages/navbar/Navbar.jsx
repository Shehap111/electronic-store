import React, {useState} from 'react'
import './Navbar.css'
import { FiMenu, FiX } from 'react-icons/fi';
import brand from '../../../img/brandLogo.png'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';
import DarkMode from '../../DarkMode/DarkMode';

const Navbar = () => {
const { CartItems } = useSelector(state => state.Cart)

const { wishlistsItems } = useSelector(state => state.wishlist)
  
const getTotalQuantity = () => {
  let total = 0
  CartItems.forEach(item => {
    total += item.quantity
  })
  return total
}

  const [activeNav, setActivNav] = useState(false)
  const [open, setOpen] = useState(false);


	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};



  const fixedNav= () => {
    if (window.scrollY >= 80) {
    setActivNav(true)
  } else {
    setActivNav(false)
  }
  }
  window.addEventListener('scroll' , fixedNav)





  return (
    <>
        <div  className={activeNav ? " fixed_nav Navbar" : " Navbar"}>
      <div className="container">
<nav className="navbar">
			<Link to="/" className="nav-logo">
				<img src={brand} alt="" />
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/Apout" className="nav-link" onClick={closeMenu}>
						About
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/Shop" className="nav-link" onClick={closeMenu}>
						Shop
					</Link>
        </li>
				<li className="nav-item">
					<Link to="/services" className="nav-link" onClick={closeMenu}>
						Services
					</Link>
        </li>             

				<li className="nav-item">
					<Link to="/Contact" className="nav-link" onClick={closeMenu}>
						Contact
					</Link>
				</li>
            </ul>
            
          <div className="icon-shop media_screne">
              <Link to="/Cart">
                  <li><i className="fa-solid fa-cart-shopping"></i>
                  {
                    CartItems.length > 0 && (
                        <span className="cunt_cart">
                            {getTotalQuantity() || 0}
                       </span>
                    ) 
              }
                </li></Link>
              <Link to='/wishlist'>
                <li><i className="fa-solid fa-heart"></i>
                  {
                    wishlistsItems.length > 0 && (
                        <span className="cunt_cart">
                            {wishlistsItems.length || 0}
                       </span>
                    ) 
              }                  

              </li>

              </Link>


              <Link to="Login">
            <li><i className="fa-solid fa-user"></i>  </li>              
              </Link>    
        </div>
    


		</nav>

      </div>
    </div>
    
          <div className="icon-shop media_phone">
              <Link to="/Cart">
                  <li><i className="fa-solid fa-cart-shopping"></i>
                  {
                    CartItems.length > 0 && (
                        <span className="cunt_cart">
                            {getTotalQuantity() || 0}
                       </span>
                    ) 
              }
                </li></Link>
              <Link to='/wishlist'>
                <li><i className="fa-solid fa-heart"></i>
                  {
                    wishlistsItems.length > 0 && (
                        <span className="cunt_cart">
                            {wishlistsItems.length || 0}
                       </span>
                    ) 
              }                  

              </li>

              </Link>

              <Link to="Login">
            <li><i className="fa-solid fa-user"></i>  </li>              
        </Link>
      </div>
    
    
    
    </>
    
    
   
  )
}

export default Navbar