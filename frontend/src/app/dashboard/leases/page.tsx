import LeasePage from '@/components/sections/dashboardContent/leaseContent'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Lease content",
  description: "Leased Artist Hub",
};

function Page() {
  return <LeasePage/>
}

export default Page