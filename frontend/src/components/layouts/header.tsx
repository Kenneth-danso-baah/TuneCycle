'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';
import { musicNavLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Logo from '../../../public/images/tc-turner.svg'
import { CgMenuOreos } from "react-icons/cg";
import MenuDrawer from '../common/menuDrawer';
import { usePrivy } from '@privy-io/react-auth';
import { useAuth } from '@/hooks/useAuth';



function Header() {
    const pathname = usePathname();
    const [open,setOpen] = useState<boolean>(false);
    const {isAuthenticated, login,logout} = useAuth()
    const {user} = usePrivy()
    const walletAddress = user?.wallet?.address;

    const handleOpenClose=()=>{
      setOpen((prevState)=>!prevState)
    }

  return (
    <header className='w-full bg-[#0B0E1F] z-50 top-0 sticky  border border-b border-brand-rcc border-l-0 border-r-0 border-t-0'>

      <div className='mx-5 lg:leftRightSpacing py-5 flex  overflow-x-hidden lg:flex-row items-center justify-between gap-4'>

        <Link href="/" className='flex-shrink-0 '>
          <Image
            src={Logo}
            alt=" Logo"
            width={150}
            height={150} 
            className='object-contain'
          />
         
        </Link>

  
        <nav className='hidden  lg:flex flex-wrap justify-center gap-10 text-white'>
          {musicNavLinks.map(({ name, href }, index) => (
            <Link
              href={href}
              key={index}
              className={clsx('text-[18px] font-extrabold capitalize',{'text-[#03FCFD] font-bold':pathname === href})}
            >
              {name}
            </Link>
          ))}
        </nav>

 
        <div className='hidden  lg:flex-shrink-0 lg:flex items-center gap-20  '>

          {isAuthenticated && (
            <div>
              <h1 className='font-bold font-poppins text-[20px]'>{walletAddress?.slice(0,6)}...{walletAddress?.slice(-4)}</h1>
            </div>
          )}
      
          {
            isAuthenticated ? (
              <Button  onClick={logout} className='font-bold rounded-[5px] bg-btn-gradient capitalize text-[16px] border-white text-white hover:bg-white hover:text-brand-primary'>
              logout
            </Button>
            ):(
              <Button  onClick={login} className='font-bold rounded-[5px] bg-btn-gradient capitalize text-[16px] border-white text-white hover:bg-white hover:text-brand-primary'>
              login
            </Button>
            )
          }

        </div>

        <CgMenuOreos onClick={handleOpenClose} className='block lg:hidden text-3xl mr-5 cursor-pointer'/>


      </div>
      {
        open && (
          <MenuDrawer/>
        )
      }
    </header>
  );
}

export default Header