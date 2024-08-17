import React from 'react'
import Intro from '../../intro_sections/Intro'
import {Link} from 'react-router-dom'
import './main_services.css'
const Registration = () => {
  return (

    <>
      <Intro name='Registration' link="Registration"/>
      
<section className='Registration'>
          

    <div className='container'>
        <form className='Registration_card'>
            <h3>Registration</h3>      
            <p>If you don't have an account with us, please Registration.</p> 
            
                  <label>Username *</label>
                  <input type='text' placeholder='Your Username' className='input' required />  
                  
                  <label>Email address *</label>
                  <input type='email' placeholder='Your Email address ' className='input' required/>     
             
                  <label>Password *</label>        
                  <input type='password' placeholder='Type Password' required className='input'/>     

                  <p>Your personal data will be used to
                      support your experience throughout
                      this website, to manage access to your account,
                      and for other purposes described in our <Link to="/Privacy_Policy">privacy policy.</Link> </p>  

                  <input type='submit' className='btnn'/>
        </form>              


    </div>


</section>
      </>

  )
}

export default Registration