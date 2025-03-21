"use client";

import React, { useEffect, useState } from "react";
import DashboardHeaderSearchInfo from "../entryPointContent/dashboardSearchInfo";
import ProfileBanner from "./profileBanner";
import PersonalInformation from "./personalInformation";
import { useSmartWallets } from '@privy-io/react-auth/smart-wallets';
import { contractAbi, contractAddress } from '@/lib/integrations/viem/abi';
import { encodeFunctionData } from 'viem';
import { sepolia } from "viem/chains";
import { usePrivy } from "@privy-io/react-auth";
import { readUserProfile } from "@/lib/integrations/viem/contract";

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

  const { user} = usePrivy()
  const walletAddress = user?.wallet?.address;
  const [userDetails, setUserDetails] = useState<ProfilesProps>({
    name: "Anthony Daniels",
    profession: "Musician",
    email: "kwakusakyihues@gmail.com",
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "19/06/2000",
    mobilePhone: "+233 548600000000",
  });

  const { client } = useSmartWallets();

  // const handleUpdateUserDetails = (updatedDetails: Partial<ProfilesProps>) => {
  //   setUserDetails((prev) => ({
  //     ...prev,
  //     ...updatedDetails,
  //     name: `${updatedDetails.firstName || prev.firstName} ${
  //       updatedDetails.lastName || prev.lastName
  //     }`, // Ensure full name updates dynamically
  //   }));
  // };

  useEffect(()=> { 
    const fetchUserData = async () => {
        if(walletAddress){
            const profile = await readUserProfile(`${walletAddress}` as `0x{string}`);
            if (profile) {
              setUserDetails(profile);
            }
        }
    };
    fetchUserData();
},[walletAddress])

  const sendUserDetailsToBlockchain = async () => {
    if (!client) {
      console.error("No smart account client found");
      return;
    }

    try {
      const tx = await client.sendTransaction({
        chain: sepolia,
        to: contractAddress,
        value: BigInt(0),
        data: encodeFunctionData({
          abi: contractAbi,
          functionName: "updateUserDetails",
          args: [
            userDetails.name,
            userDetails.profession,
            userDetails.email,
            userDetails.firstName,
            userDetails.lastName,
            userDetails.dateOfBirth,
            userDetails.mobilePhone,
            `${walletAddress}`
          ],
        }),
      });
      console.log("Transaction sent:", tx);
    } catch (error) {
      console.error("Failed to send user details to blockchain:", error);
    }
  };

  return (
    <div className="p-10 h-auto bg-[#161212]">
      <DashboardHeaderSearchInfo dashboard_location="Profile" />
      <ProfileBanner userDetails={userDetails} />
      <PersonalInformation
        userDetails={userDetails}
        onUpdateUserDetails={sendUserDetailsToBlockchain}
      />
      <button onClick={() => sendUserDetailsToBlockchain()}>Save to Blockchain</button>
    </div>
  );
}

export default ProfilePage;
