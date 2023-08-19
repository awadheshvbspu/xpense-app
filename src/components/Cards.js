import React, { useState } from 'react';
import { product } from '../data';
import ArrowImg from '../assets/img/product/cards/arrow.svg'

export default function Cards() {
  const[index,setIndex] = useState(1)
  const {cards} = product;
  return (
    <>
    <div className='flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px]'>
    {cards.map((card,i)=>{
      const {icon,title,subtitle,delay} = card
      return(
    <div key={i} data-aos='zoom-out' data-aos-offset='300' data-aos-delay={delay}
    onClick={()=>setIndex(i)}
    className={`${index===i && 'bg-white shadow-2xl'} w-[350px] h-[350px]  flex flex-col justify-center items-center max-auto p-[65px] text-center rounded-[12px] cursor-pointer transition-all`}>
    <div className='mb-6'>
    <img src={icon} alt=''/>
    </div>
    <div className='mb-3 text-[30px]'>{title}</div>
    <div className='mb-6 text-light'>{subtitle}</div>
    {index === i && <img src={ArrowImg} alt=''/>}
    </div>
      )
    })}
    </div>
    </>
  )
}

