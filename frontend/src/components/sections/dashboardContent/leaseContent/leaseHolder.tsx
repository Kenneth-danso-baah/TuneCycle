"use client"
import LeasedCard from '@/components/common/cards/leasedCard'
import React, { useEffect, useState } from 'react'
import { readUserListings } from "@/lib/integrations/viem/contract";
import { usePrivy, useWallets } from '@privy-io/react-auth';
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
  genre: string;
  isListed:boolean;
}

function LeaseHolder() {
  const { wallets} = useWallets();
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
            const balance = await readUserListings(`${walletAddress}` as `0x${string}`);
            if (balance) {
              setListing(balance);
            }
            
        }
    };
    fetchUserData();
},[walletAddress,nftTx])

const  handleSubmit  = async (index: number) => {
  setLoading(true);
  setNftTx("");
  if (!client) {
    console.error("No smart account client found");
    return;
  }

  setErrorMessageNft("");
  try {
    // if (!wallets || wallets.length === 0) {
    //   console.error("No wallet connected");
    //   return;
    // }

    // const wallet = wallets[0];
    // if (!wallet) {
    //   console.error("Wallet is undefined");
    //   return;
    // }


    // const provider = await wallet.getEthereumProvider();
    // if (!provider) {
    //   console.error("Provider is undefined");
    //   return;
    // }

    // const currentChainId = await provider.request({ method: "eth_chainId" });

    // if (currentChainId !== `0x${sepolia.id.toString(16)}`) {
    //   await wallet.switchChain(sepolia.id);
    // }


    // const client = createWalletClient({
    //   chain: sepolia,
    //   transport: custom(provider),
    //   account: walletAddress as `0x${string}`,
    // });
    // const contract = getContract({
    //   address: contractAddress,
    //   abi: contractAbi,
    //   client,
    // });

    // const tsxx =    await contract.write.mint([
    //   formData.musicFile, 
    //   formData.coverImage,
    //   formData.title,
    //   BigInt(formData.amount),
    //   BigInt(formData.leaseYears)
    //   ]);
    const tx = await client.sendTransaction({
      chain: sepolia,
      to: contractAddress,
      value: BigInt(0),
      data: encodeFunctionData({
        abi: contractAbi,
        functionName: "list",
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
    <div className='py-10'>
    <div className='pb-5'>
        <h1 className='text-3xl font-bold'>Unleased Music</h1>
    </div>

    <div className='grid grid-cols-3 gap-10'>
      {listing?.map((item, originalIndex) => {
        if (!item.isListed) {
          return (
            <LeasedCard
              key={originalIndex}
              imageSrc={item.image || "/images/mgg.svg"}
              amount={( Number(item.price)/1e18 ).toString()}
              duration={item.leaseYear.toString()}
              title={item.title}
              onClick={() => handleSubmit(originalIndex)}
            />
          );
        }
        return null;
      })}
    </div>
</div>

  )
}

export default LeaseHolder