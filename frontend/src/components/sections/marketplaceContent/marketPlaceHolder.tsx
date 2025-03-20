import React from 'react'
import MusicContentContainer from './musicContentContainer'
import { Button } from '@/components/ui/button'


function MarketPlaceHolder() {
    return (
        <div className='flex items-center flex-col border-b  border-brand-mouve h-auto'>
    
            <div className='mb-10'>
               <MusicContentContainer />
              </div>
        </div>
      )
    
}

export default MarketPlaceHolder