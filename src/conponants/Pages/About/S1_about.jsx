import React from 'react'
import Intro from '../../intro_sections/Intro'
import CountUp from 'react-countup';
export const S1_about = () => {
  return (
      <>
      <Intro name='About us' link="AboutUs"/>
     
<div className='S1_about'>
<div className="container">
    <div className="content">
            <h3>Luxury & high-end technology products</h3>
            <p>Nulla bibendum tincidunt ligula, a placerat dolor viverra eget. Maecenas id diam sed ligula facilisis lacinia. Nunc maximus est ut sem varius suscipit. Phasellus vel tellus viverra, lacinia metus et, faucibus tellus. Etiam hendrerit est viverra eros mollis, a laoreet ante dictum. Aliquam erat volutpat. Vivamus tempor blandit dui vel interdum. Nam maximus nunc a augue pulvinar, non euismod mauris tempus.</p>
    </div>    
    <div className="row">
            <div className="col-lg-3 col-md-6 box">
                <span> <CountUp duration={2.75} start={0} end={12580}/> </span>       
                <h4>Technology product</h4>
            </div>
              
            <div className="col-lg-3 col-md-6 box">
                <span> <CountUp duration={2.75} start={0} end={5180}/> </span>      
                <h4>Employees</h4>
            </div>
              
            <div className="col-lg-3 col-md-6 box">
                <span> <CountUp duration={2.75} start={0} end={20350}/> </span>     
                <h4>Happy Users</h4>
            </div>

            <div className="col-lg-3 col-md-6 box">
                <span> <CountUp duration={2.75} start={0} end={1625}/> </span>    
                <h4>Our Stores</h4>
            </div>


    </div>                  




</div>
</div>
      
      </>
  )
}
