import React from 'react'
import about from '../assets/about.png'
const About = () => {
  return (
      <div className='w-[375px] sm:w-[1440px]  mx-auto bg-[#FFFFFF] sm:h-[804px] h-[516px]  '>
          <div className="sm:w-[1440px] w-[375px] h-[516px] sm:h-[467px] sm:block flex  justify-center items-center sm:absolute top-[989px]  bg-gradient-to-r from-[rgba(30,42,93,0.04)] via-[rgba(48,62,130,0.04)] to-[rgba(60,80,157,0.04)]">
            <div className='w-[384px] sm:block hidden h-[468px] absolute  left-[205px]'>
              <img src={about} alt="" />
            </div>

            <div className='sm:w-[447px] w-[275px] sm:h-[254px]   h-[235px] sm:absolute top-[107px] left-[789px] flex justify-center flex-col items-center sm:justify-start sm:items-start sm:text-left text-center gap-4'>
              <h1 className='text-[26px] sm:text-[45px] font-semibold leading-[27px] text-[#0E2368] font-poppins'>About Us</h1>
              <h1 className=' sm:text-[15px] text-[11px] font-normal sm:leading-[27px] leading-[21px] text-[#0E2368] mt-[21px] font-open-sans'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.            </h1>
              
              
              <div className=' w-[96px] sm:w-[132px] sm:h-[42px] h-[25px] flex  justify-center items-center   sm:rounded-full rounded-[30px] sm:px-[23px] px-[19px] sm:py-[3px] py-[3px] sm:gap-[10px] gap-[13px] bg-[#E23744] text-white'>
                  <h1 className='text-[11px] sm:text-[16px] font-semibold sm:leading-[36px] leading-[46px] tracking-[3%] text-[#ffffff] font-open-sans'>Read More</h1>
              </div>
          </div>
          </div>
         
          
        </div>

  )
}

export default About