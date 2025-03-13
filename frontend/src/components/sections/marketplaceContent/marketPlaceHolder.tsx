import React from 'react'
import MusicContentContainer from './musicContentContainer'
import PriceRangeslider from '@/components/common/priceRangeSlider'
import { DropDownCategories } from '@/components/common/dropDownCategories'
import { leaseStatusOptions, yearlyOption,genreOptions, artistStatusOptions, languageOptions, durationOptions } from '@/lib/data'

function MarketPlaceHolder() {
    return (
        <div className='flex items-center border-b border-brand-mouve h-auto'>
            <div className='flex-[20%] place-self-start pt-5'>
                    <div className='space-y-10 mx-5'>
                      
                      <PriceRangeslider/>

                      <div className='space-y-3'>
                        <h1 className='text-[18px] font-bold'>Yearly Added</h1>
                       
                             <DropDownCategories 
                             className='w-full'
                              options={yearlyOption}
                              placeholder='2025' 
                              label='2025' />
                      </div>

                      <div className='space-y-3'>
                        <h1 className='text-[18px] font-bold'>Leases Status</h1>
                       
                             <DropDownCategories 
                              className='w-full'
                              options={leaseStatusOptions}
                              placeholder='status of music' 
                              label='status' />
                      </div>


                      <div className='space-y-3'>
                        <h1 className='text-[18px] font-bold'>Duration</h1>
                       
                             <DropDownCategories 
                              className='w-full'
                              options={durationOptions}
                              placeholder='duration' 
                              label='Duration for music' />
                      </div>
                      

                      <div className='space-y-3'>
                        <h1 className='text-[18px] font-bold'>Genre</h1>
                       
                             <DropDownCategories 
                               className='w-full'
                              options={genreOptions}
                              placeholder='Genre' 
                              label='Genre' />
                      </div>

                      <div className='space-y-3'>
                        <h1 className='text-[18px] font-bold'>Artist</h1>
                       
                             <DropDownCategories 
                              options={artistStatusOptions}
                              className='w-full'
                              placeholder='Artist label' 
                              label='Artist' />
                      </div>


                      <div className='space-y-3'>
                        <h1 className='text-[18px] font-bold'>Language</h1>
                       
                             <DropDownCategories 
                             className='w-full'
                              options={languageOptions}
                              placeholder='English' 
                              label='English' />
                      </div>

                
                    </div>
              </div>
    
            <div className='flex-[80%]  border border-l border-brand-mouve border-r-0 border-t-0 border-b-0 '>
               <MusicContentContainer />
              </div>
        </div>
      )
    
}

export default MarketPlaceHolder