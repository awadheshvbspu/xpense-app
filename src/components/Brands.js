import React from 'react';
import {overview} from '../data'

export default function Brands() {
  const {brands} = overview
  return (
    <section className='py-9 bg-purple-50'>
    <div className='conatiner mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6 lg:px-10 px-0'>
    {brands.map((item,i)=>{
      const {image,delay} = item
      return(
   <div key={i} data-aos='fade-up' data-aos-elay={delay}>
   <img src={image} alt=''/>
   </div>
      )
    })}
    </div>
    </section>
  )
}

