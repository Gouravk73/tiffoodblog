import React from 'react'

const CardDetail = ({data}) => {
   return (
    <div className=" w-[381px] h-[554px] border border-[#93A2D361] rounded-[20px]  bg-white p-4  relative">
        <img
            src={data.image}
            alt="ds"
            className="w-[326px] h-[257px] rounded-t-lg "
        />
         <div className='w-[295px] h-[194px]   absolute left-[43px]  '>
            <h1 className='w-[285px] h-[27px]     text-[21px] font-bold leading-[27px]   text-[#0E2368] mt-4' >{data.heading}</h1>
            <h1 className='w-[295px] h-[81px]  mt-4  text-[15px] font-normal leading-[27px] tracking-[-2%]   text-[#444957]'>
            PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
            </h1>
            <button className="w-[131px] h-[42px] rounded-[21px] border border-[#424961] py-3 px-26    flex justify-center items-center mt-4 "            >
            Read More
                </button>
         </div>
       
    </div>

  )
}

export default CardDetail