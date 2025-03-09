import React from 'react'
import BaseContent from './base-content'
import CryptoBanner from './crypto-banner'
import OwnSound from './own-sound'
import Unlock from './unlock'
import NewOpportunities from './new-opportunities'
import PerfectMatch from './perfect-match'

import RecommendationHolder from './recommendation-holder'
import WhatMakesUsGreat from './what-makes-us-great'
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