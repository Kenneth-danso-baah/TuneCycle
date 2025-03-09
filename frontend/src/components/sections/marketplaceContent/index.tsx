import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import React from 'react'
import MarketPlaceSubHeader from './market-place-sub-header'
import MarketPlaceHolder from './market-place-holder'
import NewRelease from './new-releases'
import NowAvailableAgain from './now-available'

function MarketPlacePage() {
  return (
    <div>
     <Header/>
     <div className='py-7  items-center '>
            <h1 className='text-5xl font-monoBold text-center'>DISCOVER <span className='text-brand-brew'>UNLIMITED</span> MUSIC</h1>
         </div>

     <MarketPlaceSubHeader/>
     <MarketPlaceHolder/>
     <NewRelease/>
     <NowAvailableAgain/>
     <Footer/>
    </div>

  )
}

export default MarketPlacePage