import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import React from 'react'
import Basecontent from './base-content'
import HowItWorksHolder from './how-it-work-holder'
import EarningPrice from './earning-price-content'

function ForArtistPage() {
  return (
    <div>
        <Header/>
        <Basecontent/>
        <HowItWorksHolder/>
        <EarningPrice/>
        <Footer/>
    </div>
  )
}

export default ForArtistPage