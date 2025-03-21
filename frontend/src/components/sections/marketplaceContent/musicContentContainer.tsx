import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import MusicPlayerCard from '@/components/common/cards/musicPlayerCard';
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { readListings } from '@/lib/integrations/viem/contract';
import { sepolia } from 'viem/chains';
import { contractAbi, contractAddress } from '@/lib/integrations/viem/abi';
import { createWalletClient, custom } from 'viem';

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

import { encodeFunctionData } from 'viem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { setData } from '@/app/features/search/searchSlice';
import NotFoundContent from '@/components/common/notFoundContent';




function MusicContentContainer() {
  const { user } = usePrivy();
  const walletAddress = user?.wallet?.address;

  const { wallets} = useWallets();
  const [listing, setListing] = useState<Listing[]>([]);
  const [, setLoading] = useState(false);
  const [nftTx, setNftTx] = useState('');
  const [, setErrorMessageNft] = useState('');
  const [itemsToShow, setItemsToShow] = useState(8);
  const [, setTotalItems] = useState(0);


  const {filteredData} = useSelector((state:RootState)=>state.search)
  const dispatch = useDispatch()


  

  useEffect(() => {
    const fetchUserData = async () => {
      if (walletAddress) {
        const balance = await readListings();
        if (balance) {
          setListing(balance);
          const filtered = balance.filter((item) => !item.isListed); 
          setTotalItems(filtered.length);
          dispatch(setData(balance))
        }
      }
    };
    fetchUserData();
  }, [walletAddress,dispatch,nftTx]);

  const handleSubmit = async (index: number, price: bigint) => {
    setLoading(true);
    setNftTx('');
    setErrorMessageNft("");

    
    try {

      if (!wallets || wallets.length === 0) {
        console.error("No wallet connected");
        return;
    }

    const wallet = wallets[0];
    if (!wallet) {
        console.error("Wallet is undefined");
        return;
    }

      const provider = await wallet.getEthereumProvider();
      if (!provider) {
          console.error("Provider is undefined");
          return;
      }

      const currentChainId = await provider.request({ method: "eth_chainId" });

      if (currentChainId !== `0x${sepolia.id.toString(16)}`) {
          await wallet.switchChain(sepolia.id);
      }

      const client = createWalletClient({
          chain: sepolia,
          transport: custom(provider),
          account: walletAddress as `0x${string}`,
      });


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

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 8);
  };

  const filteredListings = listing.map((item, index) => ({ ...item, originalIndex: index })).filter((item) => item.isListed && !item.isRented); 
  const visibleListings = filteredListings.slice(0, itemsToShow);



  return (
    <div className='w-full p-5 my-10'>
      {visibleListings.length === 0 ? (
                <NotFoundContent 
                title="Hmmm not available"
                 description={`No resutls found `}
                 image='/images/errors.png'/>
      ): (
        <div className="flex flex-wrap gap-5">
        {visibleListings.slice(0, itemsToShow).map((item, index) => (
          <MusicPlayerCard
            key={index}
            mainImage={item.image || '/images/mgg.svg'}
            subImage={item.image || '/images/mgg.svg'}
            title={item.title}
            artist={item.artiste || ''}
            musicUrl={item.music} 
            price={item.price.toString()}
            duration={(Number(item.price) / 1e18).toString()}
            onClick={() => handleSubmit(item.originalIndex, item.price)}
          />
        ))}

      </div>
      )}


      {visibleListings.length < filteredData.length && (
        <div className='py-10 grid place-content-center'>
          <Button
            className='gradient-border-button text-[20px] font-bold py-7'
            onClick={handleLoadMore}
          >
            Load more
          </Button>
        </div>
      )}
    </div>
  );
}

export default MusicContentContainer;