import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import React from 'react'
import BaseContent from './base-content'
import UnlockOriginalContent from './unlock-original-holder'
import FrequentAskQuestion from './frequent-ask-question-holder'

function ForBuyersPage() {
  return (
    <div>
        <Header/>
        <BaseContent/>
        <UnlockOriginalContent/>
        <FrequentAskQuestion/>
        <Footer/>
    </div>
  )
}

export default ForBuyersPage