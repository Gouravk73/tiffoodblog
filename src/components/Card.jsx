import React, { useState } from 'react'
import CardDetail from './CardDetail'

import Data from '../assets/ArticleData';
import prevdisabled from '../assets/arrowprevdisabled.png'
import prev from '../assets/arrowprev.png'
import next from '../assets/arrownext.png'
import nextdisabled from '../assets/arrownextdisabled.png'
const Card = () => {
  const items=3;
  const [currentData,setCurrentData]=useState(1);
  const [imgprev,setImgprev]=useState(prevdisabled);
  const [imgnext,setImgNext]=useState(next);
  const start= (currentData-1)*items;
  const end=start+items;
  const currentPage=Data.slice(start,end);
  const PrevHandler=()=>{
    if(start===0){
      return;
    }
    else {
      setImgprev(prevdisabled);
      setImgNext(next);
      setCurrentData((prevPage) => prevPage - 1)}
  }
  const NextHandler=()=>{
    if(end >= Data.length){
      return;
    }
    else {
      setImgprev(prev);
      setImgNext(nextdisabled);
      setCurrentData((prevPage) => prevPage + 1)
  }
}
  return (
       <div className=" absolute top-[125px]  flex flex-wrap justify-center gap-4    ">
           {
            currentPage.map((item,ind)=>(<CardDetail key={ind} data={item} />))
           }
            <div className="w-full flex justify-center mt-4">
          <img src={imgprev} alt="" 
            onClick={PrevHandler}
            disabled={currentPage === 1}
            className="px-4 py-2     "

            />
            <h1 className='text-center flex justify-center items-center ' >{Math.ceil(end/items)} /2</h1>
            <img src={imgnext} alt="" 
            onClick={NextHandler }
      
           className="px-4 py-2     "

            />
      </div>
     </div>
  )
}

export default Card