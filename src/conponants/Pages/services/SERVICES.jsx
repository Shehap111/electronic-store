import React from 'react'
import './main_services.css'
import Intro from '../../intro_sections/Intro'
import intro_img from '../../../img/services_intro.jpg'
import services_1 from '../../../img/service-1.jpg'
import services_2 from '../../../img/service-2.jpg'
import services_3 from '../../../img/service-3.jpg'
import services_4 from '../../../img/service-4.jpg'

const SERVICES = () => {
  return (
    <>
      <Intro name='Services' link="Services"/>
<div className='Services'>
    <div className='container'>
          <div className='Allintro'>        
    <div className='intro'>
    <h3>Services</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>   
    
 <img src={intro_img} alt='intro_img'/>

</div>
<div className='row All-content' >                     

    <div className='col-lg-6 '>
       <img src={services_1} alt='services'/>                  
    </div>

                      
    <div className='col-lg-6 content'>
      <h4>PHOTOSHOOT</h4>                    
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>


    <div className='col-lg-6 content'>
      <h4>EDITING</h4>                    
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        


    </div>

                      

    <div className='col-lg-6'>
       <img src={services_2} alt='services'/>                  
    </div>

    <div className='col-lg-6'>
       <img src={services_3} alt='services'/>                  
    </div>


    <div className='col-lg-6 content'>
      <h4>RETOUCHING</h4>                    
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                       

                          
    </div>

    <div className='col-lg-6 content'>
      <h4>LIGHTNING</h4>                    
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      

                          
    </div>

    <div className='col-lg-6'>
       <img src={services_4} alt='services'/>                  
    </div>
           

           

  </div>
          

      <div className="foot_services">
            <div className="row">
              <div className="col-lg-3 col-md-6 box">
                  <i className="fa-solid fa-earth-americas"></i>
                  <h4>Worldwide Shipping</h4>
                  <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>  
              </div>
              
              <div className="col-lg-3 col-md-6 box">
                  <i className="fa-solid fa-headphones-simple"></i>
                  <h4>Best Quality</h4>
                  <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>  
              </div>
              
              <div className="col-lg-3 col-md-6 box">
                  <i className="fa-solid fa-money-check-dollar"></i>
                  <h4>Best Offers</h4>
                  <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>  
              </div>

              <div className="col-lg-3 col-md-6 box">
                  <i className="fa-solid fa-user-lock"></i>
                  <h4>Secure Payments</h4>
                  <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>  
              </div>

            </div>    
    </div>
</div>              
</div>

    </>
  )
}

export default SERVICES