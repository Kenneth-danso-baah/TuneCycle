import MarketPlacePage from '@/components/sections/marketplaceContent'
import ProtectedRoute from '@/lib/protected-route';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Marketplace",
  description: "Leased Artist Hub",
};



function Page() {
  return (
    <ProtectedRoute>
        <MarketPlacePage/>
    </ProtectedRoute>
  )
}

export default Page