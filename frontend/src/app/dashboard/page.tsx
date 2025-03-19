import DashboardEntryPoint from '@/components/sections/dashboardContent/entryPointContent';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Dashboard",
  description: "Leased Artist Hub",
};


function Page() {
  return <DashboardEntryPoint/>
      
}

export default Page