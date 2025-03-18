"use client"
import LeasedCard from '@/components/common/cards/leasedCard'
import React, { useEffect, useState } from 'react'
import { readUserListings } from "@/lib/integrations/viem/contract";
import { usePrivy } from '@privy-io/react-auth';

interface Listing {
  owner:string;
  price:bigint;
  tokenId: bigint;
  leaseYear:bigint;
  title:string;
  music: string;
  image:string;
  isListed:boolean;
}

function LeaseHolder() {

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
    <div className='py-10'>
    <div className='pb-5'>
        <h1 className='text-3xl font-bold'>Unleased Music</h1>
    </div>

    <div className='grid grid-cols-3 gap-10'>
      {listing?.filter(item => !item.isListed).map((item) => (
        <LeasedCard
          key={item.title}
          imageSrc={item.image || "/images/mgg.svg"}
          amount={item.price.toString()}
          duration={item.leaseYear.toString()}
          title={item.title}
          onClick={() => console.log(`Clicked on ${item.title}`)}
        />
      ))}
    </div>
</div>

  )
}

export default LeaseHolder