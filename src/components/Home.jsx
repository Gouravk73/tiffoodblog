import React from 'react'
import img from '../assets/foodtruck.png'
import pizza from '../assets/pizza.png'
import vector from '../assets/Vector.png'
const Home = () => {
  return (
    <div className='max-w-[1440px] flex   mx-auto bg-[#FFFFFF] h-[804px] relative' >
        
        <div className='relative'>
            <div  className='absolute top-[33px] left-[100px] '>
                <img src={img} alt="" className='max-w-[107px] max-h-[83px] ' />
            </div>


            <div className='w-[362px] h-[207px] absolute top-[227px] left-[100px] '>
                <h1 className='text-[62px] font-bold leading-[69px] text-[#0E2368]' >
                    Discover the <br />
                    <span className='text-[#E23744]'>Best</span>  Food <br />
                    and Drinks
                </h1>
            </div>


            <div className='w-[345px] h-[55px] absolute top-[460px] left-[100px] '>
                <h1 className='text-[16.44px] font-normal leading-[27.41px] text-[#444957]' >
                   Naturally made Healthcare Products for the better care & support of your body.
                </h1>
            </div>
            <div className=' w-[190px] h-[63px] flex  justify-center items-center absolute top-[556px] left-[97px] rounded-full px-[34px] py-[14px] gap-7 bg-[#E23744] text-white'>
                 <h1 className='text-[18px] font-bold leading-[36px]   text-[#ffffff]'>Explore Now!</h1>
            </div>
        </div>


        <div className='relative '>
            <div style={{
            backgroundImage: `url(${vector})`,
            }}
            className='w-[752px] absolute left-[688px] h-[839px]  z-10  '
            >
            </div>
            <div className='border border-white w-[122px] h-[42px] z-20 flex  justify-center items-center absolute top-[32px] left-[1277px] rounded-[21px] px-[3px] py-[3px] gap-[10px] bg-[#E23744] text-white'>
                <h1 className='text-[16px] font-semibold leading-[36px]   text-[#ffffff]'>Get In Touch</h1>
            </div>
            <div className='w-[735px] h-[804px] absolute top-[5px] left-[705px]'>
            <img src={pizza} alt="" />

            </div>
           
        </div>
    </div>
  )
}

export default Home