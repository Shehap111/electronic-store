import React from 'react'
import Home_s1_1 from '../../../img/Home_s1_1.png'
import Home_s1_2 from '../../../img/Home_s1_2.png'
import Home_s1_3 from '../../../img/Home_s1_3.png'
import Home_s1_4 from '../../../img/Home_s1_4.png'



const S1_Home = () => {
  return (
<div className='S1_home'>
    <div className="container">
    <div className="row">
        <div className="col-lg-6  content_s1">
        <div className="">
                        
            <h1>Raining Offers For you  every day</h1>     
            
            <p>25% Off On All Products</p>

            <a className='button_class'> Shop Now</a>

            </div>

        </div>      

        <div className="col-lg-6 ">
            <div className="imges_S1">
                <img className='bg_S1' src={Home_s1_1} alt="s" />          
                <span className='inm_1'> <img src={Home_s1_2} alt="s" /> </span>
                <span className='inm_2' >  <img src={Home_s1_3} alt="s" /> </span>
                <span className='inm_3'> <img src={Home_s1_4} alt="s" /> </span>
                <span className='inm_4'> 50% <br /> OFF </span>          
            </div>   
        </div>      


</div>
</div>  
</div>
  )
}

export default S1_Home