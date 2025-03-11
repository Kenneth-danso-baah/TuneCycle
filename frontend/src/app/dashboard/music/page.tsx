import UploadMusicPage from '@/components/sections/dashboardContent/musicContent'
import ProtectedRoute from '@/lib/protected-route'
import React from 'react'

function Page() {
  return (
    <ProtectedRoute>
        <UploadMusicPage/>
    </ProtectedRoute>
  )
}

export default Page