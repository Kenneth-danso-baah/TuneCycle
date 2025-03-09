import ForArtistPage from '@/components/sections/forArtistContent'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Artist page",
  description: "Leased Artist Hub",
};


function Page() {
  return <ForArtistPage/>
}

export default Page