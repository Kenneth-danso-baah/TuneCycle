"use client"

import React from 'react'
import DashboardHeaderSearchInfo from './dashboard-search-info'
import DashBoardStatisticContent from './dashboard-statistics-holder'
import DashBoardFooter from './dashboard-statistic-footer'
import DashBoardCharts from './dashboard-charts'

function DashboardEntryPoint() {
  return (

    <div className=' p-10  h-auto bg-[#161212]'>
        <DashboardHeaderSearchInfo dashboard_location="Home"/>
        <div className='py-10'>
            <h1 className='text-4xl font-monoBold'>Welcome Anthony</h1>
         </div>
         <DashBoardStatisticContent/>
         <DashBoardCharts/>
         <DashBoardFooter/>
         
    </div>
  )
}

export default DashboardEntryPoint