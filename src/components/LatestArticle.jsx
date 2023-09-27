import React from 'react'
import Card from './Card'
const LatestArticle = () => {
  return (
    <div className='w-[1440px] h-[994px] mx-auto    relative  bg-[#FFFFFF] '>
    
        <div className='w-[1225px]     h-[679px]   mx-auto absolute left-[108px] '>
          <h1 className='w-[461px] h-[84px] absolute   text-[56px] font-semibold leading-[42px] tracking-[4%] text-[#0E2368]'>
              Latest Articles
          </h1>
          <Card/>
        </div>
        
    </div>
  )
}

export default LatestArticle