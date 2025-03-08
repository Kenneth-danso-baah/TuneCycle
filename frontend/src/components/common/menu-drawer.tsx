import { musicNavLinks } from '@/lib/data'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'



function MenuDrawer() {
  return (
    <div className='absolute h-[100vh] bg-[#0c0f21]  w-[50%] z-50 top-15 border  border-l-0 border-zinc-800'>
    <div className='flex flex-col items-center text-[18px] font-dmMono capitalize'>
     {musicNavLinks.map((items,index)=>(
        <Link className={clsx(`py-5 px-10  border-zinc-800
         first:border-zinc-800  hover:text-zinc-800`,{
          
         })} href={items.href} key={index}>
            {items.name}
        </Link>
     ))}

        <Button  className='font-bold rounded-[5px] bg-btn-gradient capitalize text-[16px] border-white text-white hover:bg-white hover:text-brand-primary'>
            login
         
         </Button>

    </div>
    </div>
  )
}

export default MenuDrawer