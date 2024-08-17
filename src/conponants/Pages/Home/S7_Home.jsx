import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import Home_S7_1 from '../../../img/Home_S7_1.jpg'
import Home_S7_2 from '../../../img/Home_S7_2.jpg'
import Home_S7_3 from '../../../img/Home_S7_3.jpg'
import Home_S7_4 from '../../../img/Home_S7_4.jpg'





const S7_Home = () => {
const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    loop:true,
    navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3,

        }
    },
};




  return (
    <div className='S7_home'>
    <div className="container">
          
    <OwlCarousel
    className='owl-theme ' {...options}>
        <div className="item">

            <ul>    
                <li> <img src={Home_S7_1} alt="" /> </li>
                <li>Ann Smith <br /> CEO & Founder</li>
                      </ul>   
                      
            <p>The software and user interfaces are intuitive and user-friendly, making it easy for me to stay connected and productive.</p>          
        </div>      

        <div className="item">

            <ul>    
                <li> <img src={Home_S7_2} alt="" /> </li>
                <li>Ann Smith <br /> CEO & Founder</li>
                      </ul>   
                      
            <p>Tablets to laptops and gaming systems, their products have consistently delivered top-notch performance and reliability.</p>          
        </div>    

        <div className="item">

            <ul>    
                <li> <img src={Home_S7_3} alt="" /> </li>
                <li>Ann Smith <br /> CEO & Founder</li>
                      </ul>   
                      
            <p>I’ve been using the technology products from A for years now and I can confidently say that they have exceeded my expectations.</p>          
        </div>               

        <div className="item">

            <ul>    
                <li> <img src={Home_S7_4} alt="" /> </li>
                <li>Ann Smith <br /> CEO & Founder</li>
                      </ul>   
                      
            <p>Their customer service is also outstanding, providing quick and helpful support whenever I’ve had questions or issues.</p>          
        </div>    

    </OwlCarousel>


      
</div>          
</div>
  )
}

export default S7_Home