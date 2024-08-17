import React, {useState} from 'react'
import './Footer.css'
import heart from '../../../img/heart(1).png'
import { Link } from 'react-router-dom'
const Footer = () => {

    const [heartState, setHeartState] = useState(false);

    const activeHeart =()=>{
         setHeartState(heartState => !heartState)   
    } 
    const addClassToggel = heartState? "onclick-heart":" "


  return (
    <div className='Footer'>
      <div className="intro_Footer">
        <div className="row">
          <div className="col-lg-3 col-md-6">
 <h4>Subscribe for Join Us!</h4> 
          </div>

          <div className="col-lg-3 col-md-6">
                          <p>Subcribe to get information coupons.</p>

          </div>

          <div className="col-lg-3 col-md-6">
             <input type="text"  placeholder='Your email address...' />
          </div>

          <div className="col-lg-3 col-md-6">
            <button className='button_class'>Subscribe</button>
          </div>          

        </div>
             
             
              
          </div>  
<div className="container">
          <div className="row foot_contant">
              <div className="col-lg-6">
                <h3>Get in touch</h3>
                <p>Call Us 24/7 Free</p>
                <h4>1800 6565 222</h4>
                <p>60, 29th Street, San Francisco, CA 94110, <br /> United States support@arostore.com</p>
                  

              </div>

              <div className="col-lg-3 col-md-6">
              <h3>Infomation</h3>
                  
                <ul>
                  <li>  <Link to="/Apout">About Us </Link> </li>
                  <li>  <Link to="/services"> Services </Link>  </li>
                  <li>  <Link to="/"> Start a Return </Link></li>
                  <li>  <Link to="/Contact"> Contact Us </Link> </li>
                  <li>  <Link to="/Privacy_Policy"> Privacy Policy</Link>  </li>
                  <li>  <Link to="/Login"> Login </Link>  </li>
                </ul>  
                  

              </div>  

              <div className="col-lg-3 col-md-6">
              <h3>Useful Links</h3>
                  
                <ul>
                  <li>  <Link to="/Shop"> Smartphones </Link>  </li>
                  <li>  <Link to="/Shop"> Headphones </Link>  </li>
                  <li>  <Link to="/Shop"> Laptop & Table </Link>  </li>
                  <li>  <Link to="/Shop"> Gadgets </Link>  </li>
                  <li>  <Link to="/Login"> My account </Link>  </li>
                  <li>  <Link to="/Login"> Order Tracking </Link>  </li>
                </ul>  
              
              </div> 


          </div>  
    </div> 

            <div className="last_foot">
              <ul className='container'>
                  
                <li>© 2023 brand store. All rights reserved.</li>

                <li>Made with <span onClick={activeHeart} className={`heart ${addClassToggel}`}> </span> by
                    <a target='blank' href="https://www.linkedin.com/in/shehap-samer/">Shehap</a></li>

                  </ul>
          </div>      
    </div>
  )
}

export default Footer