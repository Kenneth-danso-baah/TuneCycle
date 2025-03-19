import React from 'react'
import DashboardHeaderSearchInfo from '../entryPointContent/dashboardSearchInfo'
import LeaseHolder from './leaseHolder'
import Summary from './summary'


function LeasePage() {
  return (
    <div className=' p-10  h-auto bg-[#161212]'>
         <DashboardHeaderSearchInfo dashboard_location="Lease Music"/>
         <LeaseHolder/>
         <Summary/>
      </div>
  )
}

export default LeasePage