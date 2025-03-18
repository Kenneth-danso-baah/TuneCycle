import { DropDownCategories } from '@/components/common/dropDownCategories'
import { genres, musicOptions } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'





function MarketPlaceSubHeader() {
  return (
    <div className='bg-brand-rcc'>
        <div className='flex items-center gap-20 leftRightSpacing py-4'>

        <div className='flex-[10%] bg-brand-primary border border-brand-mouve p-3 rounded-[5px]'>
            <div className='flex gap-2 '>
            <input type="text" className='bg-transparent outline-none placeholder:font-extrabold placeholder:text-center' placeholder='Search'/>
             <Image src='/images/Search.svg' alt="search-icon" width={30} height={20} className='mr-10'/>
            </div>

            </div>

        <div className='flex-[80%] grid grid-cols-5 text-[18px] font-extrabold'>
            {genres.map(({name,href},index)=>(
                <Link href={href} key={index}>
                    <span className='capitalize'>{name}</span>
                </Link>
            ))}

        </div>

        {/* <div className='flex-[10%]'>
            <DropDownCategories 
            options={musicOptions}
             placeholder='Choose a genre' 
             label='Rap music' />
            </div> */}
            <Link href="/for_buyers/buyers_board">
                <h1 className='text-[20px] font-poppins text-nowrap  hover:text-blue-500'>Buyers Board</h1>
            </Link>
        </div>

    </div>
  )
}

export default MarketPlaceSubHeader