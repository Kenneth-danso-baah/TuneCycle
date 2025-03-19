import React from 'react'
import UploadMusicHolder from './uploadMusicHolder'
import DashboardHeaderSearchInfo from '../entryPointContent/dashboardSearchInfo'


function MusicUploadPage() {
  return (
    <div className=' p-10  h-auto bg-[#161212]'>
      <DashboardHeaderSearchInfo dashboard_location="Music conent"/>
         <UploadMusicHolder/>
    </div>
  )
}

export default MusicUploadPage