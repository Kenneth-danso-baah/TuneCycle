"use client"

import React from 'react'
import DashboardHeaderSearchInfo from './dashboardSearchInfo'

import DashBoardCharts from './dashbaordCharts'
import DashBoardStatisticContent from './dashboardStatisticHolder'
import DashBoardFooter from './dashboardStatisticFooter'


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