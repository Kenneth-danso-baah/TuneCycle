import React from 'react'
import DashboardHeaderSearchInfo from '../entryPointContent/dashboardSearchInfo'
import LeaseHolder from './leaseHolder'
import Summary from './summary'
import LeasedCharts from './leasedChart'
import Titlecontent from './titleContent'
import UploadMusicHolder from '../musicContent/uploadMusicHolder'

function LeasePage() {
  return (
    <div className=' p-10  h-auto bg-[#161212]'>
         <DashboardHeaderSearchInfo dashboard_location="leases"/>
         <LeaseHolder/>
         <Summary/>
         <LeasedCharts/>
         <UploadMusicHolder/>
      </div>
  )
}

export default LeasePage