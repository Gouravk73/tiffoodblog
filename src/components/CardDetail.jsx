import React from 'react'

const CardDetail = ({data}) => {
   return (
    <div className="  sm:w-[381px] w-[271px] sm:h-[554px]  h-[484px] border border-[#93A2D361] rounded-[20px]  bg-white p-4 sm:mb-0 mb-8   relative">
        <img
            src={data.image}
            alt="ds"
            className="sm:w-[326px] sm:h-[257px] w-[204px] h-[166px] rounded-t-lg "
        />
         <div className='w-[295px] h-[194px]   sm:absolute left-[43px]  '>
            <h1 className='sm:w-[285px] sm:h-[27px]  w-[236px] h-[35px]   sm:text-[21px] text-[16px] font-bold sm:leading-[27px] sm:tracking-0 tracking-[4%] leading-[35px]  text-[#0E2368] sm:mt-4 mt-2 font-poppins' >{data.heading}</h1>
            <h1 className='sm:w-[295px] sm:h-[81px] w-[213px] h-[106px]   sm:text-[15px] text-[12px] font-normal smleading-[27px] leading-[22px] sm:tracking-[-2%] tracking-[-1%]   text-[#444957] sm:mt-4 mt-2 font-open-sans'>
            PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
            </h1>
            <button className="sm:w-[131px] sm:h-[42px] w-[118px] h-[26px] rounded-[21px] border border-[#424961] py-3 px-26  sm:text-[16.44px] sm:leading-[35.59px]   text-[11px] leading-[46px] sm:tracking-[3%]  flex justify-center items-center sm:mt-4 mt-2 font-source-sans-pro"            >
            Read More
                </button>
         </div>
       
    </div>

  )
}

export default CardDetail