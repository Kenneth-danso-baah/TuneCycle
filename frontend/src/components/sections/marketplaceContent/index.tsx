"use client"
import Image from 'next/image'
import Footer from '@/components/layouts/footer';
import React, {  useEffect, useState } from 'react';
import MarketPlaceSubHeader from './marketPlaceSubHeader';
import MarketPlaceHolder from './marketPlaceHolder';
import FlipperLoader from '@/components/common/flipperLoader';
import Link from 'next/link';




function MarketPlacePage() {
  const [isLoading,setIsLoading]=useState(true)


  useEffect(() => {  
  const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []); 

  return (
    <div>
      {isLoading ? (
        <FlipperLoader />
      ) : (
        <>
          <div className='flex items-center justify-between py-5 mx-10'>
          <Link href="/" className='flex-shrink-0 '>
          <Image
            src="/images/tc-turner.svg"
            alt=" Logo"
            width={150}
            height={150} 
            className='object-contain'
          />
         
        </Link>

            <h1 className='text-5xl font-monoBold text-center'>
              DISCOVER <span className='text-brand-brew'>UNLIMITED</span> MUSIC
            </h1>

            <div className='hidden  lg:flex-shrink-0 lg:flex items-center gap-20  '>

            <Link href="/for_buyers/buyers_board">
                <h1 className='text-[20px] font-poppins text-nowrap  hover:text-blue-500'>Buyers Board</h1>
            </Link>
      </div>
</div>

          <MarketPlaceSubHeader />
          <MarketPlaceHolder />

          <div className='mt-20'>
          <Footer/>
          </div>
        </>
      )}
    </div>
  );
}

export default MarketPlacePage;