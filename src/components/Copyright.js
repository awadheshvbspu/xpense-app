import React from 'react';
import { copyright } from '../data';

export default function Copyright() {
  const {link1,link2,copyText,social} = copyright;
  return (
    <div className='flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between pt-[50px]' data-aos='fade-up' data-aos-delay='300'>
    <div className='flex gap-x-6'>
    <a href={link1.href} className='hover:text-accent transition'>{link1.name}</a>
    <a href={link1.href} className='hover:text-accent transition'>{link2.name}</a>
    </div>
    <div>{copyText}</div>
    <ul className='flex gap-x-[12px]'>
    {social.map((item,i)=>{
      const {href,icon} = item;
      return(
        <li>
        <a href={href}>
        <img src={icon} alt='' />
        </a>
        </li>
      )
    })}
    </ul>
    </div>
  )
}

