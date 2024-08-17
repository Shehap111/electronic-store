import React from 'react'
import S2_img_1 from '../../../img/Home_S6_1.jpg'
import S2_img_2 from '../../../img/Home_S6_2.jpg'
import S2_img_3 from '../../../img/Home_S6_3.jpg'

const S6_Home = () => {
  return (
    <div className='S2_home'>
    <div className="container">
    <div className="row">
        <div className="col-lg-4 card">
            <div className="S2_imges">
                <img src={S2_img_1} alt="" />          
            </div>
                      
            <div className="content_S2">
            <span>Shop Brands Xbox & Ps5</span>
            <h5>Headphone</h5>
            <i className="fa-regular fa-circle-right"></i>

            </div>
        </div>      

        <div className="col-lg-4 card">
            <div className="S2_imges">
                <img src={S2_img_2} alt="" />          
            </div>
                      
            <div className="content_S2">
            <span>Hot Sale 2023</span>
            <h5>Smart Phone</h5>
            <i className="fa-regular fa-circle-right"></i>

            </div>      
        </div> 

        <div className="col-lg-4 card">
            <div className="S2_imges">
                <img src={S2_img_3} alt="" />          
            </div>
                      
            <div className="content_S2">
            <span>Flat Deal To 70%</span>
            <h5>Camera</h5>
            <i className="fa-regular fa-circle-right"></i>

            </div>       
        </div> 

    </div>
    </div>  
    </div>
  )
}

export default S6_Home