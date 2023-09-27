import React from 'react'
import img from '../assets/foodtruck.png'
import pizza from '../assets/pizza.png'
import vector from '../assets/Vector.png'
const Home = () => {
  return (
    <div className='max-w-[1440px] sm:flex   mx-auto bg-[#FFFFFF] h-[804px] relative' >
        
        <div className=' sm:block hidden relative'>
            <div  className='absolute top-[33px] left-[100px] '>
                <img src={img} alt="" className='max-w-[107px] max-h-[83px] ' />
            </div>
            <div className='w-[362px] h-[207px] absolute top-[227px] left-[100px] '>
                <h1 className='text-[62px] font-bold leading-[69px] text-[#0E2368] font-source-sans-pro' >
                    Discover the <br />
                    <span className='text-[#E23744]'>Best</span>  Food <br />
                    and Drinks
                </h1>
            </div>
            <div className='w-[345px] h-[55px] absolute top-[460px] left-[100px] '>
                <h1 className='text-[16.44px] font-normal leading-[27.41px] text-[#444957] font-open-sans' >
                   Naturally made Healthcare Products for the better care & support of your body.
                </h1>
            </div>
            <div className=' w-[190px] h-[63px] flex  justify-center items-center absolute top-[556px] left-[97px] rounded-full px-[34px] py-[14px] gap-7 bg-[#E23744] text-white'>
                 <h1 className='text-[18px] font-bold leading-[36px]   text-[#ffffff] font-open-sans'>Explore Now!</h1>
            </div>
        </div>

        <div className='relative '>
            <div style={{
            backgroundImage: `url(${vector})`,
            backgroundSize: 'cover',        
            backgroundPosition: 'center',
            }}
            className='sm:w-[752px] w-[375px] absolute sm:left-[688px] sm:h-[839px] h-[426px]  z-10  '
            >
                <div className='border border-white sm:w-[122px] w-[87.89px] sm:h-[42px] h-[31px]  flex  justify-center items-center absolute sm:top-[32px] top-[18px] sm:left-[589px] left-[268.55px] rounded-[21px] px-[4px] py-[4px] sm:gap-[10px] gap-[13px] bg-[#E23744] text-white'>
                <h1 className='text-[11px] sm:text-[16px] font-semibold sm:leading-[36px] leading-[46px]  font-source-sans-pro text-[#ffffff]'>Get In Touch</h1>
                </div>
                
            </div>
            <div className='sm:w-[735px] w-[378.21px] sm:h-[804px] h-[413.72px]  sm:absolute   sm:top-[5px] sm:left-[705px]'>
                <img src={pizza} alt="" />

                </div>
        </div>




        <div className=' sm:hidden     relative flex flex-col justify-center items-center py-16 gap-4'>
             
            <div className='sm:w-[362px] w-[240px] sm:h-[207px] h-[130px] flex flex-col justify-center items-center '>
                <h1 className='sm:text-[62px]  text-[38px] font-bold sm:leading-[69px] leading-[46px] text-[#0E2368] font-source-sans-pro' >
                    Discover the <br />
                    <span className='text-[#E23744]'>Best</span>  Food <br />
                    and Drinks
                </h1>
            </div>
            <div className='sm:w-[345px]  w-[249px] sm:h-[55px] h-[36px]  '>
                <h1 className='sm:text-[16.44px] text-[11px] font-normal sm:leading-[27.41px] leading-[18px] text-[#444957] font-open-sans' >
                   Naturally made Healthcare Products for the better care & support of your body.
                </h1>
            </div>
            <div className=' w-[123px] sm:w-[190px] sm:h-[63px] h-[40px] flex  justify-center items-center   sm:rounded-full rounded-[30px] sm:px-[34px] px-[23px] sm:py-[14px] py-[12px] sm:gap-7 gap-6 bg-[#E23744] text-white'>
                 <h1 className='text-[12px] sm:text-[18px] font-semibold sm:leading-[36px] leading-[31px]  text-[#ffffff] font-open-sans'>Explore Now!</h1>
            </div>
        </div>
    </div>
  )
}

export default Home