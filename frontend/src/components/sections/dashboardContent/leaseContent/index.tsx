import React from 'react'
import DashboardHeaderSearchInfo from '../entryPointContent/dashboard-search-info'
import LeaseHolder from './lease-holder'
import Summary from './summary'
import LeasedCharts from './leased-chart'

function LeasePage() {
  return (
    <div className=' p-10  h-auto bg-[#161212]'>
         <DashboardHeaderSearchInfo dashboard_location="leases"/>
         <LeaseHolder/>
         <Summary/>
         <LeasedCharts/>
      </div>
  )
}

export default LeasePage