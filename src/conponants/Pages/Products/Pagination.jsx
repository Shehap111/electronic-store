import React from 'react'

const Pagination = ({pages ,setcurrentPages , currentPages}) => {

    const genratedPages = [];

    for (let i = 1; i <= pages; i++) 
        genratedPages.push(i)

  return (
      <div className='Pagination'>
          
<button
        onClick={() => setcurrentPages((prev) => prev - 1)}
        className="page previous"
        disabled={currentPages === 1}>

        <i className="fa-solid fa-left-long"></i>
      </button>

          {
              genratedPages.map((page) => {
                  return (
                      <div onClick={() => setcurrentPages(page)}
                     
                    className={currentPages === page ? "page active" : "page"}
                          
                          key={page}>
                          {page}
                      </div>
                  )
              })
          }

                <button
        onClick={() => setcurrentPages((prev) => prev + 1)}
        className="page next"
        disabled={currentPages === pages}
      >
        
        <i className="fa-solid fa-right-long"></i>
      </button>


    </div>
  )
}

export default Pagination