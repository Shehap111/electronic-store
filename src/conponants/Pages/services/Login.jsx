import React from 'react'
import Intro from '../../intro_sections/Intro'
import {Link} from 'react-router-dom'
import './main_services.css'



const Login = () => {
  return (
      <>
          
      <Intro name='LogIn' link="Login"/>
      <div className='login'>
        
                       <form className='Registration_card'>
            <h3>Log In</h3>      
          
            
                  <label>Username *</label>
                  <input type='text' placeholder='Your Username' className='input' required />    
             
                  <label>Password *</label>        
                  <input type='password' placeholder='Type Password' required className='input'/>     

        <input type='submit' className='btnn' />
              <p className='mt-5'>If you don't have an account with us, please <Link to="/Registration">Registration.</Link></p>
          
          </form>     
</div>





    </>
  )
}

export default Login