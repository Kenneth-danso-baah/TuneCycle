import React from 'react'
import DashboardHeaderSearchInfo from '../entryPointContent/dashboard-search-info'
import UploadMusicHolder from './upload-music-holder'


function MusicUploadPage() {
  return (
    <div className=' p-10  h-auto bg-[#161212]'>
         <DashboardHeaderSearchInfo dashboard_location="music"/>
         <UploadMusicHolder/>
    </div>
  )
}

export default MusicUploadPage