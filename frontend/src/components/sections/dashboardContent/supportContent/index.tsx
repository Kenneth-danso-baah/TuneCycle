import React from 'react'
import DashboardHeaderSearchInfo from '../entryPointContent/dashboard-search-info'
import SupportHolder from './support-holder'
import GetSupport from './get-support'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Support Content",
  description: "Leased Artist Hub",
};


function SupportPage() {
  return (
    <div className=' p-10  h-auto bg-[#161212]'>
       <DashboardHeaderSearchInfo dashboard_location="Support"/>
       <GetSupport/>
        <SupportHolder/>
    </div>
  )
}

export default SupportPage