"use client";

import React, { useState } from "react";
import DashboardHeaderSearchInfo from "../entryPointContent/dashboardSearchInfo";
import ProfileBanner from "./profileBanner";
import PersonalInformation from "./personalInformation";

interface ProfilesProps {
  name: string;
  profession: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  mobilePhone: string;
}

function ProfilePage() {
  const [userDetails, setUserDetails] = useState<ProfilesProps>({
    name: "Anthony Daniels",
    profession: "Musician",
    email: "kwakusakyihues@gmail.com",
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "19/06/2000",
    mobilePhone: "+233 548600000000",
  });

  const handleUpdateUserDetails = (updatedDetails: Partial<ProfilesProps>) => {
    setUserDetails((prev) => ({
      ...prev,
      ...updatedDetails,
      name: `${updatedDetails.firstName || prev.firstName} ${
        updatedDetails.lastName || prev.lastName
      }`, // Ensure full name updates dynamically
    }));
  };

  return (
    <div className="p-10 h-auto bg-[#161212]">
      <DashboardHeaderSearchInfo dashboard_location="Profile" />
      <ProfileBanner userDetails={userDetails} />
      <PersonalInformation
        userDetails={userDetails}
        onUpdateUserDetails={handleUpdateUserDetails}
      />
    </div>
  );
}

export default ProfilePage;
