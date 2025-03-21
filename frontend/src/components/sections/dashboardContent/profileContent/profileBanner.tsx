"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProfilesProps } from '../../../../../types/global.types';

interface ProfileBannerProps {
  userDetails: ProfilesProps;
}

function ProfileBanner({ userDetails }: ProfileBannerProps) {
  return (
    <div className='my-10 w-full rounded-[10px] bg-[#252B36] h-[50vh] relative'>
      <div className="w-full">
        <Image
          src="/images/default-profile-banner.png"
          className="w-full object-contain"
          alt=""
          width={500}
          height={500}
        />
        <Button className='bg-[#7e856f] border font-bold absolute top-10 right-5 text-[16px] p-3 capitalize'>
          Edit Cover
        </Button>
      </div>

      <div className='absolute top-[44%] w-full'>
        <div className='p-5 flex justify-between'>
          <div className='flex items-center gap-5'>
            <div className='rounded-full'>
              <Image
                src="/images/male.svg"
                className='rounded-full'
                alt=""
                width={150}
                height={150}
              />
            </div>
            <div className='font-bold text-[18px] space-y-2 flex items-center gap-10'>
              <div>
                <h1>{userDetails.name}</h1>
                <p>{userDetails.profession}</p>
              </div>
              <div>
                <h1>{userDetails.email}</h1>
              </div>
            </div>
          </div>

          <div className='place-self-end p-2 rounded-[10px] bg-[#499BFC]'>
            <Button className='px-5 text-[18px] capitalize font-bold'>
              Edit Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBanner;