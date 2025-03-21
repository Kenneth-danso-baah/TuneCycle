import React from 'react'
import BaseContent from './baseContent'
import CryptoBanner from './cryptoBanner'
import OwnSound from './ownSound'
import Unlock from './unlock'
import NewOpportunities from './newOpportunities'
import PerfectMatch from './perfectMatch'

import RecommendationHolder from './recommendationHolder'
import WhatMakesUsGreat from './whatMakesUsGreat'
import Header from '@/components/layouts/header'
import Footer from '@/components/layouts/footer'



function  MainPage() {
  return (
    <div>
         <Header/>
         <BaseContent/>
         <CryptoBanner/> 
         <OwnSound/> 
         <Unlock/>
         <NewOpportunities/>
          <PerfectMatch/>
         <RecommendationHolder/>
         <WhatMakesUsGreat/>
         <Footer/>


         
    </div>
  )
}

export default  MainPage