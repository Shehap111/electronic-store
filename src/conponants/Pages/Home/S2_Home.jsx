import React from 'react'
import S2_img_1 from '../../../img/Home_S2_1.jpg'
import S2_img_2 from '../../../img/Home_S2_2.jpg'
import S2_img_3 from '../../../img/Home_S2_3.jpg'



const S2_Home = () => {
  return (
    <div className='S2_home'>
    <div className="container">
    <div className="row">
        <div className="col-lg-4 card">
            <div className="S2_imges">
                <img src={S2_img_1} alt="" />          
            </div>
                      
            <div className="content_S2">
            <span>Free Shipping All</span>
            <h5>Headphone</h5>
            <i className="fa-regular fa-circle-right"></i>

            </div>
        </div>      

        <div className="col-lg-4 card">
            <div className="S2_imges">
                <img src={S2_img_2} alt="" />          
            </div>
                      
            <div className="content_S2">
            <span>Save Up To 50%</span>
            <h5>Earpods</h5>
            <i className="fa-regular fa-circle-right"></i>

            </div>      
        </div> 

        <div className="col-lg-4 card">
            <div className="S2_imges">
                <img src={S2_img_3} alt="" />          
            </div>
                      
            <div className="content_S2">
            <span>Best Seller 2023</span>
            <h5>Macbook</h5>
            <i className="fa-regular fa-circle-right"></i>

            </div>       
        </div> 

    </div>
    </div>  
    </div>
  )
}

export default S2_Home