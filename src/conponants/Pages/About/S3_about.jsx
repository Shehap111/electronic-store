import React from 'react'
import S3_about_1 from '../../../img/S3_about_1.jpg'
import S3_about_2 from '../../../img/S3_about_2.jpg'
import S3_about_3 from '../../../img/S3_about_3.jpg'
import S3_about_4 from '../../../img/S3_about_4.jpg'
import S3_about_5 from '../../../img/S3_about_5.jpg'
export const S3_about = () => {
  return (
<div className='S3_about'>
<div className="container">
              <div className="row">
                  <div className="col-lg-6 col-md-6 box">
                      <h3>“ Our work does make senseonly if it is a faithful witnessof his time. ”</h3>
                  </div>

                  <div className="col-lg-6 col-md-6 box">
                      <div className="imege">
                            <img src={S3_about_1} alt="" />
                        </div>
                  </div>

                  <div className="col-lg-6 col-md-6 box">
                      <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-3 ">
                              <div className="imege">
                                  <img src={S3_about_2} alt="" />
                              </div>
                          </div>

                          <div className="col-lg-6 col-md-6 col-sm-3 ">
                              <div className="imege">
                                  <img src={S3_about_3} alt="" />
                              </div>
                          </div>


                          <div className="col-lg-6 col-md-6 col-sm-3 ">
                              <div className="imege">
                                  <img src={S3_about_4} alt="" />
                              </div>
                          </div>

                          <div className="col-lg-6 col-md-6 col-sm-3 ">
                              <div className="imege">
                                  <img src={S3_about_5} alt="" />
                              </div>
                          </div>
                      </div>




                  </div>       

                  <div className="col-lg-6 col-md-6 box">
                    <h3>The.Our Team.Press.</h3>

                    <p>Pellentesque sodales ornare nulla. Nullam elementum est quis tortor ultricies tristique. Nulla tempor eros quis arcu imperdiet, rutrum pharetra mi lobortis. Donec tortor ipsum, maximus quis pellentesque vel, bibendum eu mauris.</p>

                    <p>Nulla bibendum tincidunt ligula, a placerat dolor viverra eget. Maecenas id diam sed ligula facilisis lacinia. Nunc maximus est ut sem varius suscipit. Phasellus vel tellus viverra, lacinia metus et, faucibus tellus. Etiam hendrerit est viverra eros mollis, a laoreet ante dictum. Aliquam erat volutpat. Vivamus tempor blandit dui vel interdum. Nam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras non elit vel magna molestie pellentesque in eu dui. Donec laoreet quis erat vitae finibus. Vestibulum enim eros, porta eget quam et, euismod dictum elit. Nullam eu tempus magna. Fusce malesuada nisi id felis placerat porta vel sed augue. Vivamus mollis mauris vitae rhoncus egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus luctus tempor ante in dapibus. Curabitur sed lectus tempus, pulvinar magna vel, laoreet sapien.</p>

                    <h5>Social Links</h5>

                    <ul>
                        <li><i className="fa-brands fa-twitter"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                        <li><i className="fa-brands fa-facebook"></i></li>
                        <li><i className="fa-brands fa-behance"></i></li>  
                    </ul>
                  </div>           



          </div>
</div>      
</div>
  )
}
