"use client"

import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import React, { useState, useEffect } from 'react'
import Basecontent from './baseContent'
import HowItWorksHolder from './howItWorkHolder'
import EarningPrice from './earningPriceContent'
import FlipperLoader from '@/components/common/flipperLoader'



function ForArtistPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
      const timer = setTimeout(()=>{
        setIsLoading(false)
      },3000)

      return ()=> clearTimeout(timer)

  },[])
  return (
    <div>
      {isLoading ? (
        <FlipperLoader/>
      ): (
        <>
          <Header/>
          <Basecontent/>
        <HowItWorksHolder/>
        <EarningPrice/>
        <Footer/>
        </>
      )}

  </div>
  )

    }

export default ForArtistPage