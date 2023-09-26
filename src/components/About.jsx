import React from 'react'
import about from '../assets/about.png'
const About = () => {
  return (
        <div className=" flex   w-[1440px] h-[467px] absolute top-[989px]  bg-gradient-to-r from-[rgba(30,42,93,0.04)] via-[rgba(48,62,130,0.04)] to-[rgba(60,80,157,0.04)]">
            <div className='w-[384px] h-[468px] absolute top-[989px] left-[205px]'>

                <img src={about} alt="" />
            </div>
            <div>

            </div>
        </div>

  )
}

export default About