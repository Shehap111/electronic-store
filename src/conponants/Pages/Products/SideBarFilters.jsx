import React from 'react'

export const SideBarFilters = ({filterItem, setfilterItem , setSortItem , sortItem}) => {
    const filterHandler = (e) => {
        setfilterItem(e.target.id)
    }

    const sortHandler = (e) => {
        setSortItem(e.target.id)
    }

  return (
    <div className='filters '>
          <div className='filter_dy_catt'>
              
              <h4>filter by category</h4>

              <div className="form-group">
              <input value={filterItem} onChange={filterHandler} type="radio" name='filter' id='laptop' />  
              <label htmlFor="laptop"> Laptop </label>
              </div>

              <div className="form-group">
              <input value={filterItem} onChange={filterHandler} type="radio" name='filter' id='phone&Accessories' />  
              <label htmlFor="phone&Accessories"> phone&Accessories </label>
              </div>
           
              <div className="form-group">
              <input value={filterItem} onChange={filterHandler} type="radio" name='filter' id='all' />  
              <label htmlFor="all"> All </label>
              </div>



          </div>
          
          <div className='sorting'>
          
            <h4>Sorting by Price</h4>  

            <div className="form-group">
              <input value={sortItem} onChange={sortHandler} type="radio" name='sort' id='high' />  
              <label htmlFor="high"> High To Low </label>
              </div>

            <div className="form-group">
              <input value={sortItem} onChange={sortHandler} type="radio" name='sort' id='low' />  
              <label htmlFor="low"> Low to High </label>
              </div>

            <div className="form-group">
              <input value={sortItem} onChange={sortHandler} type="radio" name='sort' id='noSort' />  
              <label htmlFor="noSort"> All </label>
              </div>

          
          </div> 
    </div>
  )
}
