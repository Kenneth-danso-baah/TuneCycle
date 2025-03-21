"use client"

import React, { useEffect, useState } from "react";
import CarouselWrapper from "./carouselWrapper";
import RecentlyAdded from "./recentlyAdded";
import { MdOutlineClear } from "react-icons/md";
import HistoryPurchase from "./historyPurchase";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { readListingsByRentedTokens } from "@/lib/integrations/viem/contract";
import { usePrivy } from "@privy-io/react-auth";

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

// Helper function to format lease duration
// const formatLeaseDuration = (leaseYear: number) => {
//     // Convert the lease year (which is in seconds) to milliseconds
//     const leaseDate = new Date(leaseYear * 1000);
//     // Format the date to a readable string
//     return leaseDate.toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//     });
// };

function BuyersBoard() {

  const [listing, setListing] = useState<Listing[]>([]);
  const { user } = usePrivy();
  const walletAddress = user?.wallet?.address;
  useEffect(() => {
    const fetchUserData = async () => {
      if (walletAddress) {
        const balance = await readListingsByRentedTokens(`${walletAddress}` as `0x${string}`);
        if (balance) {
          setListing(balance);
          console.log(balance)
        }
      }
    };
    fetchUserData();
  }, [walletAddress]);
  return (
    <div>
      <Header />
      <div className="w-full">
        <CarouselWrapper />
      </div>

      <div className="flex items-start gap-10 p-10 font-poppins w-full">
        {/* Recently Purchased */}
        <div className="flex-1 bg-[#252B36] p-5 rounded-md">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl mb-5">Recently Purchased</h1>
            <MdOutlineClear className="text-3xl font-extrabold" />
          </div>

          <div className="space-y-4">
            {listing.map((data, index) => (
              <RecentlyAdded
                key={index+1}
                image={data.image}
                title={data.title}
                artist={data.artiste}
                type={data.genre}
              />
            ))}
          </div>
        </div>

        {/* History of Songs Purchased */}
        <div className="flex-1 bg-[#252B36] p-5 rounded-md">
          <h1 className="text-3xl py-5">History of Songs Purchased</h1>

          <div className="space-y-4">
            {listing.map((data, index) => (
              <HistoryPurchase
                key={index}
                id={index+1}
                image={data.image}
                name={data.title}
                genre={data.genre}
                date={(Number(data.price)/1e18).toString()}
                duration={data.leaseYear.toString()}
              />
            ))}
          </div>
        </div>
      </div>

      <div className=" flex items-start p-10 gap-10 mb-10">
{/* 
      <div className="flex-1 bg-[#252B36] p-5 rounded-md">
      <div className="py-10">
          <h1 className="font-poppins text-3xl ">Recommended Songs</h1>
        </div>
      
        <div className="flex items-center">
          {recommendedSongs.map((data, index)=>(
            <RecommendSongs
              key={index}
               image={data.image} 
               title={data.title}
                artist={data.artist}
                 genre={data.genre}              
            />
          ))}
          </div>
        </div>

        <div className="flex-1">
          <HotSales/>
        </div> */}

      </div>
    <Footer/>
    </div>
  );
}

export default BuyersBoard;