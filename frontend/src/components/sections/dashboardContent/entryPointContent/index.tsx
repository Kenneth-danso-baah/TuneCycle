"use client"

import React from 'react'
import DashboardHeaderSearchInfo from './dashboardSearchInfo'

import DashBoardCharts from './dashbaordCharts'
import DashBoardStatisticContent from './dashboardStatisticHolder'
import DashBoardFooter from './dashboardStatisticFooter'


function DashboardEntryPoint() {
  return (

    <div className=' p-0 lg:p-10  h-auto bg-[#161212]'>
        <DashboardHeaderSearchInfo dashboard_location="Home"/>
         <DashBoardStatisticContent/>
         <DashBoardCharts/>
         <DashBoardFooter/>
         
    </div>
  )
}

export default DashboardEntryPoint