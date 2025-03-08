import React from 'react'
import Header from '../layouts/header'
import BaseContent from './base-content'
import CryptoBanner from './crypto-banner'
import OwnSound from './own-sound'
import Unlock from './unlock'
import NewOpportunities from './new-opportunities'
import PerfectMatch from './perfect-match'
import Footer from '../layouts/footer'


import Image from 'next/image'
import RecommendationHolder from './recommendation-holder'
import WhatMakesUsGreat from './what-makes-us-great'


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