import React from 'react'
import DashboardHeaderSearchInfo from '../entryPointContent/dashboard-search-info'
import ChartA from '../entryPointContent/chart-a'
import EarnChart from './earn-chart'
import EarnstatisticContent from './earn-statistic-content'
import UploadMusicHolder from '../musicContent/upload-music-holder'

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