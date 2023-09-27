import React from 'react'
import about from '../assets/about.png'
const About = () => {
  return (
      <div className='max-w-[1440px]  mx-auto bg-[#FFFFFF] h-[804px]  '>
          <div className="w-[1440px] h-[467px] absolute top-[989px]  bg-gradient-to-r from-[rgba(30,42,93,0.04)] via-[rgba(48,62,130,0.04)] to-[rgba(60,80,157,0.04)]">
            <div className='w-[384px] h-[468px] absolute  left-[205px]'>
              <img src={about} alt="" />
            </div>
            <div className='w-[447px] h-[254px] absolute top-[107px] left-[789px] '>
            <h1 className='text-[45px] font-semibold leading-[27px] text-[#0E2368]'>About Us</h1>
            <h1 className='text-[15px] font-normal leading-[27px] text-[#0E2368] mt-[21px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
            </h1>
          </div>
          </div>
         
          
        </div>

  )
}

export default About