import React, {useEffect, useState} from 'react'
import Product1 from './Product1';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProduct} from '../../../redux/apiCalls/product_api';
import Intro from '../../intro_sections/Intro';
import Spinner from '../spinner/Spinner';
import Pagination from './Pagination'
import {SideBarFilters} from './SideBarFilters';
const Products = () => {
// fetch data
  const dispatch = useDispatch();
  
  const {products, loading} = useSelector(state => state.product)
  

    const [currentPages, setcurrentPages] = useState(1);
    const [query, setquery] = useState("");
    const [filterItem, setfilterItem] = useState("all");   
    const [sortItem, setSortItem] = useState("noSort");   

    useEffect(() => {
    dispatch(fetchProduct())
    }, [])
  
    // filter products
  const filterProducts = products.filter((product) => {
    return(
    filterItem === "laptop"
      ? product.IsLaptop === true
      : filterItem === "phone&Accessories"
      ? product.IsLaptop === false
      :product    
)})
  
  // sorting products
  const sortProductsList =
    sortItem === "low"
      ? filterProducts.sort((a,b) => a.price - b.price)
      : sortItem === "high"
      ? filterProducts.sort((a,b) => b.price - a.price)
      : filterProducts.sort((a,b) => a.title > b.title ? 1 : -1  ) 
  
  
  
    //pagination 
  const product_in_page = 9
  const pages = Math.ceil(sortProductsList.length / product_in_page)

  const finishIndex = currentPages * product_in_page
    const startIndex = finishIndex - product_in_page;



 const pagination = sortProductsList.slice(startIndex, finishIndex)





    if (loading) return <Spinner />
    
  return (

      <>
                <Intro name='Store' link="Store"/>
          
          <div className='Products'>
          <div className="container">
              
              <div className="row">
          <div className='col-lg-3 mb-5'>
              <SideBarFilters filterItem={filterItem} setfilterItem={setfilterItem} sortItem={sortItem} setSortItem={setSortItem} />
          </div>
                      





                  <div className="col-lg-9">
                      <div className="row">
{
              pagination.filter((item) => {
                  return (
                    item.title.toLowerCase().includes(query)
                    
                    )
                }).map((item) => {
                  return (
                      <Product1 key={item.id} product={ item } />
                      
                  )
              })
}
                      </div>
                              

                  </div>
                  </div>
        <Pagination pages={pages}  currentPages={currentPages} setcurrentPages={setcurrentPages} />

          </div>





    </div>
      
      </>
      
      
  )
}

export default Products