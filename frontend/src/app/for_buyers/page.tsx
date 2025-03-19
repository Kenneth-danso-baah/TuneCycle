import ForBuyersPage from '@/components/sections/forBuyersContent'
import ProtectedRoute from '@/lib/protected-route';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Buyers",
  description: "Leased Artist Hub",
};


function Page() {
  return (
    <ProtectedRoute>
      <ForBuyersPage/>
    </ProtectedRoute>
  )
}

export default Page