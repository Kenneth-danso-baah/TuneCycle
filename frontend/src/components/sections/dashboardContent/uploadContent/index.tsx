import DashboardHeaderSearchInfo from '@/components/sections/dashboardContent/entryPointContent/dashboard-search-info'
import React from 'react'
import UploadForm from './upload-form'

function UploadMusicPage() {
  return (
    <div className=' p-10  h-auto bg-[#161212]'>
       <DashboardHeaderSearchInfo dashboard_location="Upload Music"/>
       <UploadForm/>
    </div>
  )
}

export default UploadMusicPage