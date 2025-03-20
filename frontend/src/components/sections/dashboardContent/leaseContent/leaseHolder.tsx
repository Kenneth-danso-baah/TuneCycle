"use client"
import LeasedCard from '@/components/common/cards/leasedCard'
import React, { useEffect, useState } from 'react'
import { readUserListings } from "@/lib/integrations/viem/contract";
import { usePrivy } from '@privy-io/react-auth';
import { useSmartWallets } from '@privy-io/react-auth/smart-wallets';
import { sepolia } from 'viem/chains';
import { contractAbi, contractAddress } from '@/lib/integrations/viem/abi';
import { encodeFunctionData } from 'viem';
import SearchFilterColumn from '../musicContent/searchFilterColumn';
import { Listing } from '../../../../../types/global.types';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import NotFoundContent from '@/components/common/notFoundContent';



function LeaseHolder() {

  const { user} = usePrivy()
  const walletAddress = user?.wallet?.address;
  const [listing, setListing] = useState<Listing[]>([]);
  const { client } = useSmartWallets();
  const [, setLoading] = useState(false);
  const [nftTx, setNftTx] = useState("");
  const [, setErrorMessageNft] = useState("");
  const query= useSelector((state:RootState)=>state.search.query)


  useEffect(()=> { 
    const fetchUserData = async () => {
        if(walletAddress){
            const balance = await readUserListings(`${walletAddress}` as `0x{string}`);
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
    // if (!wallets  wallets.length === 0) {
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
 
const filteredListings = listing
  .map((item, index) => ({ ...item, originalIndex: index }))
  .filter(item => !item.isListed)
  .filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.genre.toLowerCase().includes(query.toLowerCase()) ||
    item.owner.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='py-10'>

      <div className='py-5'>
        <SearchFilterColumn
          filterFunction={filteredListings ? (item, query)=>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.genre.toLowerCase().includes(query.toLowerCase())||
            item.owner.toLowerCase().includes(query.toLowerCase()) 
            : ()=>false
          }
        />
      </div>

    <div className='pb-5'>
        <h1 className='text-3xl font-extralight'>Unleased Music</h1>
    </div>

    <div className='grid grid-cols-3 gap-10'>
      {filteredListings.length > 0 ? (
        filteredListings.map((data) => (
          <LeasedCard
            key={data.originalIndex}
            imageSrc={data.image}
            amount={(Number(data.price) / 1e18).toString()}
            duration={data.leaseYear.toString()}
            title={data.title}
            onClick={() => handleSubmit(data.originalIndex)}
            artiste={data.artiste || 'unknown artiste'}
          />
        ))
      ) : (
        <NotFoundContent 
          title="Leased Music not added"
          description={`No results found for ${query}`}
          image='/images/errors.png'
        />
      )}
    </div>
</div>

  )
}

export default LeaseHolder