import DashboardHeaderSearchInfo from '@/components/sections/dashboardContent/entryPointContent/dashboardSearchInfo'
import React from 'react'
import UploadForm from './uploadForm'

function UploadMusicPage() {
  return (
    <div className=' p-10  h-auto bg-[#161212]'>
       <DashboardHeaderSearchInfo dashboard_location="Upload Music"/>
       <UploadForm/>
    </div>
  )
}

export default UploadMusicPage