import React from 'react';
import { testimonials } from '../data';
import ClientSlider from './ClientSlider'

export default function Testimonials() {
  const {title,clients} =testimonials;
  return (
    <section className='section'>
    <div className='conatiner mx-auto'>
    <h2 className='title mb-10 lg:mb-20 text-center max-w-[920px] mx-auto' data-aos='fade-up' data-aos-delay='300'>{title}</h2>
    <div className='max-w-[1240px] mx-auto' data-aos='fade-up' data-aos-delay='400'>
    <ClientSlider clients={clients}/>
    </div>
    </div>
    </section>
  )
}

