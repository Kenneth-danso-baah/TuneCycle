import React from 'react'
import DashboardHeaderSearchInfo from '../entryPointContent/dashboardSearchInfo'
import ProfileBanner from './profileBanner'
import PersonalInformation from './personalInformation'

function ProfilePage() {
  return (
    <div className=' p-10  h-auto bg-[#161212]'>
        <DashboardHeaderSearchInfo dashboard_location="Profile"/>
        <ProfileBanner/>
        <PersonalInformation/>

    </div>
  )
}

export default ProfilePage