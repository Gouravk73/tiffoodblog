import React from 'react'
import Card from './Card'
const LatestArticle = () => {
  return (
    <div className=' w-[375px] sm:w-[1440px] sm:h-[994px] h-[1915px] mx-auto    relative  bg-[#FFFFFF] '>
    
        <div className='w-[375px] sm:w-[1225px] sm:h-[679px]  h-[1915px]  mx-auto sm:absolute left-[108px]'>
          <h1 className='sm:w-[461px] w-[375px] sm:h-[84px] h-[54px] absolute   sm:text-[56px] text-[28px]  text-center  font-semibold sm:leading-[42px] leading-[54px] tracking-[4%] text-[#0E2368] font-source-sans-pro'>
              Latest Articles
          </h1>
          <Card/>
        </div>
        
    </div>
  )
}

export default LatestArticle