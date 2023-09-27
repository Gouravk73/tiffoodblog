import React from 'react'
import truck from '../assets/foodtruck.png'
import fb from '../assets/facebook.png'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
const Footer = () => {
  return (
        <div className='w-[1440px] h-[302px] mx-auto      relative   bg-[#F8F8F8] '>
          <div  className='w-[161px] h-[125px]  absolute top-[123px]   left-[104px]'>
                <img src={truck} alt="" className='  ' />
            </div>
          <div className='w-[232px] h-[186px] absolute top-[84px] left-[475px]  '>
            <h1 className='w-[94px] h-[27px] absolute    text-[18.84px] font-semibold leading-[27.22px] tracking-[3%] text-[#0E2368]'>Contact Us</h1>
            <h1 className=' w-[228px] h-[69px] absolute top-[41px]   text-[14.66px] font-normal leading-[23.03px]  text-[#646874]'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</h1>
            <h1 className=' w-[232px] h-[23px] absolute top-[125px]   text-[14.66px] font-normal leading-[23.03px]  text-[#646874]'>example2020@gmail.com</h1>
            <h1 className=' w-[98px] h-[23px] absolute top-[163px]   text-[14.66px] font-normal leading-[23.03px] text-center  text-[#646874]'>(904) 443-0343</h1>

        </div>
        <div className='w-[438px] h-[186px] absolute top-[84px] left-[899px]  '>
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


        
        
        </div>
        
    

       
  )
}

export default Footer