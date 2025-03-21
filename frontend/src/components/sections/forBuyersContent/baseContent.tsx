import Curves from '@/components/common/curves'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'




function BaseContent() {
  return (
    <div className='relative mb-32 lg:mb-15 md:mb-[30rem]  py-20 '>
    <div className='h-dvh  flex items-center flex-col gap-20 lg:flex-row-reverse mx-5 md:mx-10 lg:mx-20'>
        <div className='flex-[100%] lg:flex-[50%] space-y-10 z-20'>
            <h1 className='text-2xl uppercase w-[90%] text-center font-monoBold md:text-5xl'>FIND THE PERFECT SOUNDTRACK </h1>
            <p className='text-[16px] font-bold leading-[2rem] lg:text-[20px] '>Effortlessly find and license high-quality music 
                for your projects. Browse our diverse catalog and secure your soundtrack in minutes.</p>

                <div className='grid place-content-center'>
                    <Link href="/market_place" className='text-[18px] font-bold bg-btn-gradient py-4 px-8 rounded-[5px]'>Market Place</Link>
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