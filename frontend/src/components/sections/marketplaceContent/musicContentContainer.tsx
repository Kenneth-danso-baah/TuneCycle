import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import MusicPlayerCard from '@/components/common/cards/musicPlayerCard';
import { usePrivy } from '@privy-io/react-auth';
import { readListings } from '@/lib/integrations/viem/contract';
import { useSmartWallets } from '@privy-io/react-auth/smart-wallets';
import { sepolia } from 'viem/chains';
import { contractAbi, contractAddress } from '@/lib/integrations/viem/abi';
import { encodeFunctionData } from 'viem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { setData } from '@/app/features/search/searchSlice';
import NotFoundContent from '@/components/common/notFoundContent';


interface Listing {
  owner: string;
  price: bigint;
  tokenId: bigint;
  leaseYear: bigint;
  artiste?: string;
  title: string;
  music: string;
  image: string;
  genre: string;
  isListed: boolean;
}

function MusicContentContainer() {
  const { user } = usePrivy();
  const walletAddress = user?.wallet?.address;
  const [listing, setListing] = useState<Listing[]>([]);
  const { client } = useSmartWallets();
  const [, setLoading] = useState(false);
  const [, setNftTx] = useState('');
  const [, setErrorMessageNft] = useState('');
  const [itemsToShow, setItemsToShow] = useState(8);
  const [totalItems, setTotalItems] = useState(0);


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
  }, [walletAddress,dispatch]);

  const handleSubmit = async (index: number, price: bigint) => {
    setLoading(true);
    setNftTx('');
    if (!client) {
      console.error('No smart account client found');
      return;
    }

    setErrorMessageNft('');
    try {
      const tx = await client.sendTransaction({
        chain: sepolia,
        to: contractAddress,
        value: BigInt(0),
        data: encodeFunctionData({
          abi: contractAbi,
          functionName: 'rent',
          args: [BigInt(index), `${walletAddress}`],
        }),
      });
      console.log('tx', tx);
      setNftTx(tx);
    } catch (error) {
      console.error('Failed to update blockchain:', error);
      console.error('Transaction failed:', error);
      setErrorMessageNft('Transaction failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 8);
  };


  const visibleListings = filteredData.slice(0, itemsToShow);

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
            key={item.tokenId.toString()}
            mainImage={item.image || "/images/mgg.svg"}
            subImage={item.image || "/images/mgg.svg"}
            title={item.title}
            artist={item.artiste || ""}
            price={item.price.toString()}
            duration={(Number(item.price) / 1e18).toString()}
            onClick={() => handleSubmit(index, item.price)}
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