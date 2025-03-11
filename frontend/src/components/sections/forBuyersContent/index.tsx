"use client"

import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import React, { useEffect, useState } from 'react'
import BaseContent from './base-content'
import UnlockOriginalContent from './unlock-original-holder'
import FrequentAskQuestion from './frequent-ask-question-holder'
import FlipperLoader from '@/components/common/flipper-loader'

function ForBuyersPage() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
      const timer = setTimeout(()=>{
        setIsLoading(false)
      },3000)
      return ()=> clearTimeout(timer)
  },[])

  return (
    <div>
      {
        isLoading ? (
          <FlipperLoader/>
        ):
        <>
        <Header/>
        <BaseContent/>
        <UnlockOriginalContent/>
        <FrequentAskQuestion/>
        <Footer/>
        </>
      }

    </div>
  )
}

export default ForBuyersPage