import React from 'react';
import { footer } from '../data';
// import { copyright } from '../data';
import Copyright from '../components/Copyright'

export default function Footer() {
  const { logo, links, legal, newsletter, form } = footer;
  return (
    <footer className='pt-[142px] pb-[60px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8' data-aos='fade-up' data-aos-delay='200'>
          <img src={logo} alt='' />
          <div >
          <div className='text-2xl uppercase font-medium mb-6'>Links</div>
          <ul className='flex flex-col gap-y-3'>
            {links.map((item, i) => {
              const { href, name } = item;
              return (
                <li key={i}>
                  <a href={href} className='font-medium hover:text-accent transition-all'>{name}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div >
          <div className='text-2xl uppercase font-medium mb-6'>Legal</div>
          <ul className='flex flex-col gap-y-3'>
            {links.map((item, i) => {
              const { href, name } = item;
              return (
                <li key={i}>
                  <a href={href} className='font-medium hover:text-accent transition-all'>{name}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className=''>
        <div className='text-2xl uppercase font-medium mb-6'>{newsletter.title}</div>
        <div className='text-xl text-light mb-[18px]'>{newsletter.subtitle}</div>
        <form className='max-w-[349px] mb-[10px]'>
        <div className='h-[62px] p-[7px] flex border border-dark rounded-lg'>
        <input type='text' placeholder={form.placeholder}  className='w-full h-full pl-6 border-none outline-none placeholder:text-dark'/>
        <button  className='btn btn-sm bg-accent hover:bg-accentHover w-[102px] text-white'>{form.btnText}</button>
        </div>
        </form>
        <span className='text-sm text-light'>{form.smallText}</span>
        </div>
        </div>
        <hr/>
        <Copyright/>
        </div>
        </footer>
  )
}

