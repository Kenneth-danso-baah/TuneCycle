import React from 'react'
import EarnChart from './earnChart'
import EarnstatisticContent from './earnStatisticContent'
import UploadMusicHolder from '../musicContent/uploadMusicHolder'
import DashboardHeaderSearchInfo from '../entryPointContent/dashboardSearchInfo'

function EarnPage() {
  return (
    <div className=' p-10  h-auto bg-[#161212]'>
       <DashboardHeaderSearchInfo dashboard_location="Earn"/>
       <EarnChart/>
       <EarnstatisticContent/>
       <UploadMusicHolder/>
    </div>
  )
}

export default EarnPage