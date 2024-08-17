import React, {useEffect, useState} from 'react'
import Product1 from '../Products/Product1';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRecommendedProduct} from '../../../redux/apiCalls/product_api';
import Spinner from '../spinner/Spinner';
import {S3_products} from './S3_products';

const S3_home = () => {

    const dispatch = useDispatch();
    const {Recommended , loading} = useSelector(state => state.product)

    useEffect(() => {
    dispatch(fetchRecommendedProduct())
},[])


if (loading) return <Spinner/>
  return (
    <div className='S3_home topSelling'>
          <div className="container">
              <h3 className='intro-S3'>Recommended For You</h3>
              <div className="row">
                  {
                      Recommended.map((item) => {
                          return (
                              <S3_products key={item.id} product={item}/>
                          )
                      })
                  }





              </div>
          </div>
          
    </div>
  )
}

export default S3_home