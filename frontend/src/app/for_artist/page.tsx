import ForArtistPage from '@/components/sections/forArtistContent'
import ProtectedRoute from '@/lib/protected-route';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Artist page",
  description: "Leased Artist Hub",
};


function Page() {
  return (
    <ProtectedRoute>
      <ForArtistPage/>
    </ProtectedRoute>
  ) 
}

export default Page