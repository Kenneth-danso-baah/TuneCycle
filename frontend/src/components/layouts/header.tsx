'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';
import { musicNavLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Logo from '../../../public/images/logox.svg'



function Header() {
    const pathname = usePathname();

  return (
    <header className='w-full bg-[#0B0E1F] z-50 top-0 sticky  border border-b border-brand-hue-color border-l-0 border-r-0 border-t-0'>

      <div className='leftRightSpacing py-5 flex flex-col lg:flex-row items-center justify-between gap-4'>

        <Link href="/" className='flex-shrink-0 '>
          <Image
            src={Logo}
            alt="BeatBack Logo"
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

 
        <div className='hidden lg:flex-shrink-0 lg:block '>
          <Button  className='font-bold rounded-[5px] bg-btn-gradient capitalize text-[16px] border-white text-white hover:bg-white hover:text-brand-primary'>
            login
          </Button>
        </div>


      </div>
    </header>
  );
}

export default Header