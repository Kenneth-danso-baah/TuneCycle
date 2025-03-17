import { resultsMusic } from '@/lib/data'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import MusicPlayerCard from '@/components/common/cards/musicPlayerCard'
import { useWallets } from '@privy-io/react-auth';
import { usePrivy } from '@privy-io/react-auth';
import { readListings } from '@/lib/integrations/viem/contract';

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

function MusicContentContainer() {
  const { wallets} = useWallets();
  const { user} = usePrivy()
  const walletAddress = user?.wallet?.address;
  const [listing, setListing] = useState<Listing[]>();  

  useEffect(()=> {
    const fetchUserData = async () => {
        if(walletAddress){
            const balance = await readListings();
            if (balance) {
              setListing(balance);
            }
            
        }
    };
    fetchUserData();
},[walletAddress])

  return (
    <div className='mx-5 w-full pb-10 p-5'>
        <div className='py-10'>
            <h1 className='text-5xl font-bold italic font-monoBold'>3,000 Results</h1>
        </div>

        <div className='grid grid-cols-3 gap-5 '>
            {listing?.filter(item => item.isListed).map((item, index)=>(
                <MusicPlayerCard
                key={index}
                 mainImage={item.image || "/images/mgg.svg"} 
                 subImage={item.image || "/images/mgg.svg"}
                  title={item.title} 
                artist={`Kenny Danso`}
                price={item.price.toString()}
              
                 duration={`3.4`} 
               //  isNegotiable={item.isNegotiable
                  
                 />
             
            ))}
        </div>

        <div className='py-10 grid place-content-center'>
           <Button className='gradient-border-button text-[20px] font-bold py-7'>
           Load more
          </Button>
      </div>
     
    </div>
  )
}

export default MusicContentContainer