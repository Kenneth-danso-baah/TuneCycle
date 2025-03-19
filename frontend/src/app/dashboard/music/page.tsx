import MusicUploadPage from '@/components/sections/dashboardContent/musicContent';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Music  content",
  description: "Leased Artist Hub",
};


function Page() {
  return <MusicUploadPage/>
}

export default Page