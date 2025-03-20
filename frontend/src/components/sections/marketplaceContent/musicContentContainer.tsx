import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import MusicPlayerCard from '@/components/common/cards/musicPlayerCard'
import { usePrivy } from '@privy-io/react-auth';
import { readListings } from '@/lib/integrations/viem/contract';
import { useSmartWallets } from '@privy-io/react-auth/smart-wallets';
import { sepolia } from 'viem/chains';
import { contractAbi, contractAddress } from '@/lib/integrations/viem/abi';
import { encodeFunctionData } from 'viem';

interface Listing {
  owner:string;
  price:bigint;
  tokenId: bigint;
  leaseYear:bigint;
  title:string;
  music: string;
  image:string;
  genre:string;
  artiste:string;
  isListed:boolean;
  isRented: boolean;
}

function MusicContentContainer() {
  const { user} = usePrivy()
  const walletAddress = user?.wallet?.address;
  const [listing, setListing] = useState<Listing[]>();  
  const { client } = useSmartWallets();
  const [loading, setLoading] = useState(false);
  const [nftTx, setNftTx] = useState("");
  const [errorMessageNft, setErrorMessageNft] = useState("");

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

const  handleSubmit  = async (index: number, price: bigint) => {
  setLoading(true);
  setNftTx("");
  if (!client) {
    console.error("No smart account client found");
    return;
  }

  setErrorMessageNft("");
  try {

    const tx = await client.sendTransaction({
      chain: sepolia,
      to: contractAddress,
      value: BigInt(Number(price)),
      data: encodeFunctionData({
        abi: contractAbi,
        functionName: "rent",
        args: [
                BigInt(index),
              `${walletAddress}`
              ],
      }),
    });
    console.log("tx", tx);
    setNftTx(tx);

  } catch (error) {
    console.error("Failed to update blockchain:", error);
    console.error("Transaction failed:", error);
    setErrorMessageNft("Transaction failed. Please try again.");

  } finally {
    setLoading(false);
  }
};
 

  return (
    <div className='mx-5 w-full pb-10 p-5'>
        <div  className='grid grid-cols-3 gap-5 '>
        {listing?.map((item, index) => ({ ...item, originalIndex: index }))
         .filter(item => item.isListed)
         .map((item) => {
          
          return (
            <MusicPlayerCard
              key={item.originalIndex}
              mainImage={item.image || "/images/mgg.svg"} 
              subImage={item.image || "/images/mgg.svg"}
              title={item.title} 
              artist={item.artiste || ""}
              price={item.price.toString()}
              duration={item.originalIndex.toString()} 
              onClick={() => handleSubmit(item.originalIndex, item.price)}
            />
          );
        })}
        <div className='py-10 grid place-content-center'>
           <Button className='gradient-border-button text-[20px] font-bold py-7'
        
           >
           Load more
          </Button>
      </div>
        </div>
      
    </div>
  )
}

export default MusicContentContainer