import React, { useState } from 'react';
import { pricing } from '../data';
import { HiCheck, HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function Pricing() {
  const [index, setIndex] = useState(1)

  const { title, cards } = pricing
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <h2 className='h2 mb-10 lg:mb-10 text-center'>{title}</h2>
        <div className='flex flex-col lg:flex-row lg:gap-x-[30px] gap-y-[30px] justify-center items-center'>
          {cards.map((item, i) => {
            const { icon, title, services, price, userAmount, btnText, delay } = item
            return (
              <div key={i} data-aos='fade-up' data-aos-delay={delay} data-aos-offset='300'>
                <div 
                onClick={()=> setIndex(i)}
                className={`${i=== index ? 'bg-white shadow-2xl' : 'border border-green'} w-[350px] h-[450px] rounded-[12px] p-[40px] cursor-pointer transition-all`}>
                  <div className='mb-8'>
                    <img src={icon} alt='' />
                  </div>
                  <div className='text-[32px] font-semibold'>{title}</div>
                  <div className='flex flex-col gap-y-2 mb-6'>
                  {services.map((service,i) => {
                    const {name} = service;
                    return(
                      <div key={i} className='flex items-center gap-x-[10px]'>
                      <HiCheck className='text-light'/>
                      <div>{name}</div>
                      </div>
                    )
                  })}
                  </div>
                  <div className='mb-10'>
                  <div className=''>
                  <span className='text-2xl font-semibold'>{price}/</span>
                  <span className='text-xl text-light font-light'>year</span>
                  </div>
                  <div className='text-base text-light'>{userAmount}</div>
                  </div>
                  <button className={`${i === index ? 'bg-accent hover:bg-accentHover text-white' : 'border border-accent text-accent'} btn btn-sm space-x-3`}>
                  <span className=''>{btnText}</span><HiOutlineArrowNarrowRight/>
                  </button>
                </div>

              </div>
            )
          })}

        </div>
      </div>

    </section>
  )
}

