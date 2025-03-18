"use client"

import React, { useEffect, useState } from 'react'
import SearchFilterColumn from './searchFilterColumn'
import TableTitle from './tableTitle'
import { Button } from '@/components/ui/button'
import MusicContentForUpload from './musicContentForUpload'
import { songHeaders } from '@/lib/data'
import Link from 'next/link'
import { readUserListings } from '@/lib/integrations/viem/contract'
import { usePrivy } from '@privy-io/react-auth'

interface Listing {
  owner:string;
  price:bigint;
  tokenId: bigint;
  leaseYear:bigint;
  title:string;
  music: string;
  image:string;
  genre: string;
  isListed:boolean;
}
function UploadMusicHolder() {
  const { user} = usePrivy()
  const walletAddress = user?.wallet?.address;
  const [listing, setListing] = useState<Listing[]>();

  useEffect(()=> {
    const fetchUserData = async () => {
        if(walletAddress){
            const balance = await readUserListings(`${walletAddress}` as `0x${string}`);
            if (balance) {
              setListing(balance);
            }
            
        }
    };
    fetchUserData();
},[walletAddress])

  return (
    <div className='my-10 h-auto p-10 rounded-2xl w-full bg-[#252B36]'>
        <SearchFilterColumn/>
        <TableTitle/>

   

        {listing?.map((data,index)=>(
             <MusicContentForUpload 
            key={index}
            image={data.image}
            title={data.title}
            index={index.toString()}
            genre={data.genre}
            leaseYear={data.leaseYear}
            isListed={data.isListed}
             owner={''} 
             price={BigInt(0)}
              tokenId={BigInt(0)}
               music={''}               
                />
         ))}


        <Link href="/dashboard/upload" className='flex justify-center py-10'>
            <Button className="text-[18px] bg-btn-gradient py-6 px-6  font-extrabold ">upload</Button>
         </Link>

    </div>
  )
}

export default UploadMusicHolder