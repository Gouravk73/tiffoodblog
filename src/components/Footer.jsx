import React from 'react'
import truck from '../assets/foodtruck.png'
import fb from '../assets/facebook.png'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
const Footer = () => {
  return (
        <div className='sm:w-[1440px] w-[376px] sm:h-[302px] h-[608px] mx-auto  relative   bg-[#F8F8F8] '>
          <div  className='w-[161px] h-[125px]  hidden sm:block absolute top-[123px]   left-[104px]'>
                <img src={truck} alt="" className='  ' />
            </div>
          <div className='w-[232px] h-[186px]  hidden sm:block absolute top-[84px] left-[475px]  '>
            <h1 className='w-[94px] h-[27px] absolute    text-[18.84px] font-semibold leading-[27.22px] tracking-[3%] text-[#0E2368] font-source-sans-pro'>Contact Us</h1>
            <h1 className=' w-[228px] h-[69px] absolute top-[41px]   text-[14.66px] font-normal leading-[23.03px]  text-[#646874]'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</h1>
            <h1 className=' w-[232px] h-[23px] absolute top-[125px]   text-[14.66px] font-normal leading-[23.03px]  text-[#646874]'>example2020@gmail.com</h1>
            <h1 className=' w-[98px] h-[23px] absolute top-[163px]   text-[14.66px] font-normal leading-[23.03px] text-center  text-[#646874]'>(904) 443-0343</h1>

        </div>
        <div className=' w-[438px] h-[186px]  hidden sm:block absolute top-[84px] left-[899px]  '>
          <h1 className='w-[43px] h-[27px] absolute   text-[18.84px] font-semibold leading-[27.22px] tracking-[3%] text-[#0E2368]'>More</h1>
          
          <h1 className=' w-[75px] h-[26px] absolute top-[41px]  text-[14.66px] font-normal leading-[27.22px]  text-[#646874]'>About Us</h1>
          <h1 className=' w-[153px] h-[26px] absolute top-[81px]  text-[15px] font-normal leading-[27px]  text-[#646874]'>Products</h1>
          <h1 className=' w-[86px] h-[26px] absolute top-[121px]  text-[15px] font-normal leading-[27px]  text-[#646874]'>Career</h1>
          <h1 className=' w-[94px] h-[26px] absolute top-[160px]  text-15px] font-normal leading-[27px]  text-[#646874]'>Contact us</h1>


          <h1 className='w-[129px] h-[27px] absolute   left-[309px] text-[19px] font-semibold leading-[27px] tracking-[3%] text-[#0E2368]'>Social Links</h1>
          <img src={ insta} alt="" className=' w-[21px] h-[21px] absolute top-[38px] left-[309px]'/>
          <img src={twitter} alt="" className=' w-[21px] h-[21px] absolute top-[40px] left-[366px]'/>
          <img src={fb } alt="" className=' w-[21px] h-[20.99px] absolute top-[38px] left-[418px]'/>
          <h1 className=' w-[197px] h-[25px] absolute top-[161px] left-[241px] text-[14.66px] font-normal leading-[25.12px] text-center text-[#646874]'>© 2022 Food Truck Example</h1>



        </div>




        <div className='w-full sm:hidden   h-[608px] flex flex-col  justify-center items-center '>
          <div><img src={truck} alt="" className='  ' /></div>
          <div className='w-[294px] h-[116px] pt-[42px]  '>
            <h1 className='w-[119px] h-[35px]     text-[15.77px] font-semibold leading-[34.8px] tracking-[3%] text-[#0E2368] font-source-sans-pro'>Contact Us</h1>
            <h1 className=' w-[275px] h-[25px] pb-[1px]  text-[8.76px] font-normal leading-[12.27px]  text-[#646874] font-source-sans-pro'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</h1>
            <h1 className=' w-[232px] h-[23px] pb-[1px] text-[8.76px] font-normal leading-[29.45px]  text-[#646874] font-source-sans-pro'>example2020@gmail.com</h1>
            <h1 className=' w-[59px] borderh-[34px]  text-[8.76px] font-normal leading-[29.45px] text-center  text-[#646874] font-source-sans-pro'>(904) 443-0343</h1>
          </div>

          <div className='w-[294px]  pt-[42px] '>

          <h1 className='w-[55px] h-[35px]      text-[18.84px] font-semibold leading-[27.22px] tracking-[3%] text-[#0E2368]'>More</h1>
          
          <h1 className=' w-[275px] h-[25px] pb-[1px]  text-[8.76px] font-normal leading-[12.27px]  text-[#646874]'>About Us</h1>
          <h1 className=' w-[275px] h-[25px] pb-[1px]  text-[8.76px] font-normal leading-[12.27px]  text-[#646874]'> Products</h1>
          <h1 className=' w-[275px] h-[25px] pb-[1px]  text-[8.76px] font-normal leading-[12.27px]  text-[#646874]'> Career</h1>
          <h1 className=' w-[275px] h-[25px] pb-[1px]  text-[8.76px] font-normal leading-[12.27px]  text-[#646874]'>Contact us</h1>

          </div>
          <h1 className=' w-[112px] h-[33px] text-[8.76px] font-normal leading-[32.13px] text-center text-[#646874] font-roboto'>© 2022 Food Truck Example</h1>
          <div className='flex gap-[22px]'>
          <img src={ insta} alt="" className=' w-[12px] h-[12px] '/>
          <img src={twitter} alt="" className=' w-[12px] h-[9.74px]'/>
          <img src={fb } alt="" className=' w-[12px] h-[12px] '/>

          </div>
        </div>


        
        
        </div>
        
    

       
  )
}

export default Footer