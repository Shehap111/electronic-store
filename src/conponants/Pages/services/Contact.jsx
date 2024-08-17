import React from 'react'
import Intro from '../../intro_sections/Intro'
import './main_services.css'
const Contact = () => {
  return (
<>
      <Intro name='Contact US' link="Contact"/>

    <div className='Contacts'>

        <div className="location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.611850633!2d31.176062335026955!3d30.059611343172765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1696944013940!5m2!1sen!2seg" width={"100%"} height={300}  ></iframe>

<div className="container">
           <div className='row'>
         <div className='col-lg-6'>
        <form className="box_all">
          <h6>CONTACT US</h6>
          <h3>Get In Touch With Us</h3>
          <div className="mb-3">
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full Name" required/>
          </div>
          <div className="mb-3">
              <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Email Adress" required/>
          </div>
          <div className="mb-3">
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Phone No." required/>
          </div>
          <div className="mb-3">
              <textarea placeholder='Your message' rows={7}/>
          </div>
          <button className="SUBMIT form-control ">SUBMIT</button>
      </form>
         </div>
         
         <div className='col-lg-6'>
           
        <div className="righr_box">
          <h3>Get In Touch</h3>
          <p>If you are interested in working with us, please get in touch.</p>
          <ul>
              <li><i className="fa-solid fa-location-dot"></i></li>
              <li>
                  <h5>Our Address</h5>
                  <p>1247/Plot No. 39, 15th Phase, Huab Colony, Kukatpally, Hyderabad</p>
              </li>
          </ul>
          <ul>
              <li><i className="fa-regular fa-envelope"></i></li>
              <li>
                  <h5>Our Email </h5>
                  <p>info@gmailservices@gmail.com</p>
              </li>
          </ul>
        </div>
             


         </div>



       </div>
          
          
  </div>          




</div>



      



    </div>



 </>   
  )
}

export default Contact