"use client"

import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import React, { useEffect, useState } from 'react'
import BaseContent from './baseContent'

import FrequentAskQuestion from './frequentAskQuestionHolder'
import FlipperLoader from '@/components/common/flipperLoader'
import UnlockOriginalContent from './unlockOriginal'

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