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
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store';
import NotFoundContent from '@/components/common/notFoundContent';
import Indicators from '@/components/common/indicators';
import {setTotalItems, setItemsPerpage, goToPrevPage, goToNextPage, goToPage} from '@/app/features/pagination/paginationSlice'



function LeaseHolder() {

  const { user} = usePrivy()
  const walletAddress = user?.wallet?.address;
  const [listing, setListing] = useState<Listing[]>([]);
  const { client } = useSmartWallets();
  const [, setLoading] = useState(false);
  const [nftTx, setNftTx] = useState("");
  const [, setErrorMessageNft] = useState("");
  const query= useSelector((state:RootState)=>state.search.query);
  const {currentPage, itemsPerPage} = useSelector((state:RootState)=>state.pagination)
  const dispatch = useDispatch<AppDispatch>();



  useEffect(()=> { 
    const fetchUserData = async () => {
        if(walletAddress){
            const balance = await readUserListings(`${walletAddress}` as `0x{string}`);
            if (balance) {
              setListing(balance);
              dispatch(setTotalItems(balance.length))
              dispatch(setItemsPerpage(6))
            }
        }
    };
    fetchUserData();
},[walletAddress,nftTx, dispatch])

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
  .filter(item => !item.isListed && !item.isRented)
  .filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.genre.toLowerCase().includes(query.toLowerCase()) ||
    item.owner.toLowerCase().includes(query.toLowerCase())
  );

  const startIndex = currentPage * itemsPerPage;
  const visibleListings = filteredListings?.slice(startIndex, startIndex + itemsPerPage);


  const handlePrev=()=>{
    dispatch(goToPrevPage())
  }

  const handleNext=()=>{
    dispatch(goToNextPage());
  }

  const handleGoToPage=(pageIndex:number)=>{
    dispatch(goToPage(pageIndex))
  }

  
  return (
<div className='my-10 h-auto p-10 rounded-2xl w-full bg-[#252B36]'>
  <div className='py-5'>
    <SearchFilterColumn
      filterFunction={filteredListings ? (item, query) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.genre.toLowerCase().includes(query.toLowerCase()) ||
        item.owner.toLowerCase().includes(query.toLowerCase())
        : () => false
      }
    />
  </div>

  <div className='pb-5'>
    <h1 className='text-3xl font-extralight'>Unleased Music</h1>
  </div>

  {/* Conditionally render the grid or the NotFoundContent */}
  {visibleListings.length > 0 ? (
    <div className='grid grid-cols-3 gap-10'>
      {visibleListings.map((data) => (
        <LeasedCard
          key={data.title}
          imageSrc={data.image}
          amount={(Number(data.price) / 1e18).toString()}
          duration={data.leaseYear.toString()}
          title={data.title}
          onClick={() => handleSubmit(data.originalIndex)}
          artiste={data.artiste || 'unknown artiste'}
          musicUrl={data.music}
        />
      ))}
    </div>
  ) : (
    <div className='flex items-center justify-center h-[50vh]'> {/* Center the NotFoundContent */}
      <NotFoundContent
        title="Leased Music not added"
        description={`No results found for ${query}`}
        image='/images/errors.png'
      />
    </div>
  )}


  <div className='mt-20'>
    <Indicators
      currentPage={currentPage}
      totalPages={Math.ceil(visibleListings.length / itemsPerPage)}
      onPrev={handlePrev}
      onNext={handleNext}
      onGoToPage={handleGoToPage}
    />
  </div>
</div>

  )
}

export default LeaseHolder