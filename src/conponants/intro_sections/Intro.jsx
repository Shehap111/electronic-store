import React from 'react'
import {Link} from 'react-router-dom'
import './intro.css'
const Intro = (props) => {
  return (
    <div className='Intro-Sections'>
          <div className="ind">
                <h1>{props.name}</h1>
          <ul>
              <li> <Link to='/'>Home</Link> </li>
              <span>/</span>
              <li>{ props.link }</li>
          </ul>
        </div>
    </div>
  )
}

export default Intro