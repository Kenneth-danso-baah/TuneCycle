import Curves from '@/components/common/curves'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'




function BaseContent() {
  return (
    <div className='relative mb-15 py-20 '>
    <div className='h-dvh  flex items-center gap-20 flex-row-reverse mx-20'>
        <div className='flex-[50%] space-y-10'>
            <h1 className='text-5xl uppercase w-[90%] text-center font-monoBold'>FIND THE PERFECT SOUNDTRACK </h1>
            <p className='text-[20px] font-bold leading-[2rem]'>Effortlessly find and license high-quality music 
                for your projects. Browse our diverse catalog and secure your soundtrack in minutes.</p>

                <div className='grid place-content-center'>
                    <Button className='text-[18px] font-bold bg-btn-gradient py-6 rounded-[5px]'>Get Started</Button>
                </div>
        </div>

        <div className='flex-[50%] w-full z-40'>
            <Image src='/images/console.svg' alt="melody"  width={700} height={700}/>
        </div>
        </div>

        <div className='absolute top-0 w-full z-10'>
            <Curves/>
         </div>
    </div>
  )
}

export default BaseContent