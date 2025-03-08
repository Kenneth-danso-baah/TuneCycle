import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function BaseDescription() {
  return (
          <div className='flex flex-col gap-5 h-auto'>
              <div>
                <p className='md:text-[20px] font-dmMono'>Experience fast, secure, and low-cost transactions with JustPay. Our platform lets you send and receive stablecoins effortlessly—just like traditional payment apps, but powered by blockchain technology.</p>
              </div>

              <Link href="/contacts">
                 <div className='grid place-content-center'>
                <Button className='button-cutout bg-brand-beige p-2 text-[12px] text-black md:px-5 md:py-5 font-dmMono uppercase md:text-[18px]'>get started</Button>
              </div>
              </Link>

      </div>
  )
}

export default BaseDescription