import React from 'react'
import DashboardHeaderSearchInfo from '../entryPointContent/dashboard-search-info'
import ProfileBanner from './profile-banner'
import PersonalInformation from './personal-information'

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