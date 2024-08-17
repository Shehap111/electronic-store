import React from 'react'
import './Home.css'
import S1_Home from './S1_Home'
import S2_Home from './S2_Home'
import S4_Home from './S4_Home'
import S6_Home from './S6_Home'
import S7_Home from './S7_Home'
import S5_Home from './S5_Home'
import S3_home from './S3_home'
const Main_home = () => {
  return (
    <div className='Home_main'>
          <S1_Home/>
          <S2_Home />
          <S3_home/>
          <S4_Home />
          <S5_Home/>
          <S6_Home/>
          <S7_Home/>

    </div>
  )
}

export default Main_home