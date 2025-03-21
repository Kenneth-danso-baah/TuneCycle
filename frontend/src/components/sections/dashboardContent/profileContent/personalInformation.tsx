"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProfilesProps } from "../../../../../types/global.types";

interface PersonalInformationProps {
  userDetails: ProfilesProps;
  onUpdateUserDetails: (updatedDetails: Partial<ProfilesProps>) => void;
}

function PersonalInformation({ userDetails, onUpdateUserDetails }: PersonalInformationProps) {
  const [localDetails, setLocalDetails] = useState(userDetails);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onUpdateUserDetails(localDetails);
  };

  return (
    <div className="py-10 bg-[#252B36] rounded-[10px] p-10">
      <div>
        <h1 className="text-3xl font-monoBold capitalize">Personal Information</h1>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div>
          <div className="flex flex-col py-5 space-y-3">
            <label htmlFor="firstName" className="block text-[18px] font-bold">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={localDetails.firstName}
              onChange={handleInputChange}
              className="p-3 outline-none bg-[#363c46] border border-[#363346] placeholder:font-bold"
              placeholder="John"
            />
          </div>

          <div className="flex flex-col py-5 space-y-3">
            <label htmlFor="dateOfBirth" className="block text-[18px] font-bold">
              Date Of Birth
            </label>
            <input
              type="text"
              name="dateOfBirth"
              value={localDetails.dateOfBirth}
              onChange={handleInputChange}
              className="p-3 outline-none bg-[#363c46] border border-[#363346] placeholder:font-bold"
              placeholder="19/06/2000"
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col py-5 space-y-3">
            <label htmlFor="lastName" className="block text-[18px] font-bold">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={localDetails.lastName}
              onChange={handleInputChange}
              className="p-3 outline-none bg-[#363c46] border border-[#363346] placeholder:font-bold"
              placeholder="Doe"
            />
          </div>

          <div className="flex flex-col py-5 space-y-3">
            <label htmlFor="mobilePhone" className="block text-[18px] font-bold">
              Mobile Phone
            </label>
            <input
              type="text"
              name="mobilePhone"
              value={localDetails.mobilePhone}
              onChange={handleInputChange}
              className="p-3 outline-none bg-[#363c46] border border-[#363346] placeholder:font-bold"
              placeholder="+233 548600000000"
            />
          </div>

          <div className="flex flex-col py-5 space-y-3">
            <label htmlFor="email" className="block text-[18px] font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={localDetails.email}
              onChange={handleInputChange}
              className="p-3 outline-none bg-[#363c46] border border-[#363346] placeholder:font-bold"
              placeholder="johndoe@gmail.com"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center py-10">
        <Button
          className="text-3xl bg-btn-gradient py-7 font-extrabold"
          onClick={handleSave}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}

export default PersonalInformation;
