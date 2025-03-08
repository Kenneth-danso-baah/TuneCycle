import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import Curves from '../common/curves';

function BaseContent() {
    return (
        <div className='md:h-dvh relative mb-10 md:mb-0'>
          <div className='flex flex-col mt-3 md:mt-0  items-center md:justify-center h-full'>
            <h1 className=' z-20 uppercase font-monoBold  text-2xl md:max-w-2xl lg:max-w-4xl md:text-6xl text-center leading-tight'>
              LEASE YOUR MUSIC RIGHTS RETAIN YOUR OWNERSHIP
            </h1>
            <p className='w-full lg:max-w-[52%]  md:text-[20px] font-bold mt-6 text-center'>
            BeatBack empowers artistes to generate revenue without losing control of their creative work. Connect with buyers looking for fresh sounds for their projects. </p>
            
            <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center mt-10'>
                <Button className='bg-btn-gradient md:py-7 px-10 rounded-[10px] font-bold md:text-[20px] capitalize'>lease your music</Button>
                <Link href="/" className='text-nowrap text-[18px] font-extrabold md:text-[20px]'>Explore marketplace</Link>
            </div>
          </div>
    
          <div className='absolute top-0 w-full'>
            <Curves/>
          </div>
          
        </div>
      );
    
}

export default BaseContent