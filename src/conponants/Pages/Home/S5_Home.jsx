import React, {useEffect, useState} from 'react'
import Product1 from '../Products/Product1';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTopSelling} from '../../../redux/apiCalls/product_api';
import Spinner from '../spinner/Spinner';

const S5_Home = () => {

  const dispatch = useDispatch();
const {products , loading} = useSelector(state => state.product)

    useEffect(() => {
      dispatch(fetchTopSelling());
},[])

if (loading) return <Spinner/>
  return (
    <div className='topSelling'>
          <div className="container">
              <h3 className='intro_S5'>Top Selling Products</h3>
              <div className="row">
                {
                      products.map((item) => {
                          return (
                              
                              <Product1 key={item.id} product={item} />
                     );
                 })     
                      
               }   




              </div>
          </div>


    </div>
  )
}

export default S5_Home