import { musicNavLinks } from '@/lib/data'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { usePrivy } from '@privy-io/react-auth'



function MenuDrawer() {

   const {login,logout,authenticated,user} = usePrivy()
   const walletAddress = user?.wallet?.address

  return (
    <div className='absolute h-[100vh] bg-[#0c0f21]  w-[50%] z-50 top-15 border  border-l-0 border-zinc-800'>
    <div className='flex flex-col items-center text-[18px] font-dmMono capitalize'>
     {musicNavLinks.map((items,index)=>(
        <Link className={clsx(`py-5 px-10  border-zinc-800
         first:border-zinc-800  hover:text-zinc-800 text-nowrap text-start`,{
          
         })} href={items.href} key={index}>
            {items.name}
        </Link>
     ))}



      <div className='flex items-center gap-5 flex-col'>

      {authenticated && (
      <h1 className='font-bold font-poppins'>{walletAddress?.slice(0,6)}..{walletAddress?.slice(-4)}</h1>
     )}


     {authenticated ? (
               <Button onClick={logout} className='font-bold rounded-[5px] bg-btn-gradient capitalize text-[16px] border-white text-white hover:bg-white hover:text-brand-primary'>
               logout
            </Button>
     ):(
      <Button onClick={login} className='font-bold rounded-[5px] bg-btn-gradient capitalize text-[16px] border-white text-white hover:bg-white hover:text-brand-primary'>
      login
   </Button>
     )}

      </div>



    </div>
    </div>
  )
}

export default MenuDrawer