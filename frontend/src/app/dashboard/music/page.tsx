import UploadMusicPage from '@/components/sections/dashboardContent/musicContent'
import ProtectedRoute from '@/lib/protected-route'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Upload content",
  description: "Leased Artist Hub",
};


function Page() {
  return <UploadMusicPage/>
}

export default Page