import React, { useEffect, useState } from 'react'
import { usePrivy } from '@privy-io/react-auth';
import StatisticCard from '@/components/common/cards/statisticCard'
import { readUserListings } from '@/lib/integrations/viem/contract';

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

function DashBoardStatisticContent() { 
  const { user} = usePrivy()
  const walletAddress = user?.wallet?.address;
  const [listing, setListing] = useState<Listing[]>();
  const [, setTotalSongs] = useState<number>(0);
  const [, setTotalListed] = useState<number>(0);
  const [, setTotalUnlisted] = useState<number>(0);


  useEffect(()=> {
    const fetchUserData = async () => {
        if(walletAddress){
            const balance = await readUserListings(`${walletAddress}` as `0x${string}`);
            if (balance) {
              setListing(balance);
              setTotalSongs(balance.length);
              setTotalListed(balance.filter(item => item.isListed).length);
              setTotalUnlisted(balance.filter(item => !item.isListed).length);
            }
            
        }
    };
    fetchUserData();
},[walletAddress])  

  return (
    <div className='py-10'>   
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>    
                <StatisticCard key={1} name={"Total Songs Price"} amount={listing?.reduce((acc, item) => acc + Number(Number(item.price) / 1e18), 0).toString() || "0"} info={"One"} base={"Two"}/>
                <StatisticCard key={1} name={"Total Leased Price"} amount={listing?.filter(item => item.isListed).reduce((acc, item) => acc + Number(Number(item.price) / 1e18), 0).toString() || "0"} info={"One"} base={"Two"}/>
                <StatisticCard key={1} name={"Total Unleased Price"} amount={listing?.filter(item => !item.isListed).reduce((acc, item) => acc + Number(Number(item.price) / 1e18), 0).toString() || "0"} info={"One"} base={"Two"}/>    
        </div>

        
    </div>
  )
}

export default DashBoardStatisticContent