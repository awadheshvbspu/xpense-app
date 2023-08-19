import React from 'react';
import {nav} from '../data'

export default function Nav() {
  return (
    <nav>
    <ul className='flex gap-x-10'>
    {nav.map((item,i) => {
      const {href,name} =item;
  return(
   <li key={i}>
   <a href={href} className='hover:text-accent transition'>{name}</a>
   </li>
  )
})}
</ul>

</nav>
)
}


