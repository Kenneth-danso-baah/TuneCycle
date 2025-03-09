import MarketPlacePage from '@/components/sections/marketplaceContent'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Marketplace",
  description: "Leased Artist Hub",
};



function Page() {
  return <MarketPlacePage/>
}

export default Page