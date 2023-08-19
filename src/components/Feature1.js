import React from 'react';
import { features } from '../data';

export default function Feature1() {
  const {feature1} = features;
  const {pretitle,title,subtitle,btnIcon,btnLink,image} = feature1
  return (
    <section className='section'>
    <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
    <div className='flex-1' data-aos='fade-right' data-aos-offset='400'>
    <div className='pretitle'>{pretitle}</div>
    <div className='title'>{title}</div>
    <div className='lead'>{subtitle}</div>
    <button className='btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all'>{btnLink} <img src={btnIcon} alt=''/></button>
    </div>
    <div data-aos='fade-left' data-aos-offset='300' className='flex-1'><img src={image} alt=''/></div>
    </div>
    
    </div>
    
    </section>
  )
}

