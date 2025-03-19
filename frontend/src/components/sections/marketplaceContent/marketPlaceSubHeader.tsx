import Image from 'next/image'
import React from 'react'





function MarketPlaceSubHeader() {
  return (
    <div className='bg-brand-rcc'>
        <div className='flex items-center gap-20 mx-52 py-4'>

        <div className='w-full bg-brand-primary border border-brand-mouve p-3 rounded-[5px]'>
            <div className='flex justify-between '>
            <input type="text" className='bg-transparent outline-none placeholder:font-extrabold placeholder:text-center' placeholder='Search'/>
             <Image src='/images/Search.svg' alt="search-icon" width={30} height={20} className='mr-10'/>
            </div>

            </div>

        </div>

    </div>
  )
}

export default MarketPlaceSubHeader