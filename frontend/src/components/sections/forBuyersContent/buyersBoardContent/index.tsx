import React from "react";
import CarouselWrapper from "./carouselWrapper";
import RecentlyAdded from "./recentlyAdded";
import { MdOutlineClear } from "react-icons/md";
import { purchaseHistory, recentlyAddedMusic, recommendedSongs } from "@/lib/data";
import HistoryPurchase from "./historyPurchase";
import Header from "@/components/layouts/header";
import RecommendSongs from "./recommendSongs";
import HotSales from "./hotSales";
import Footer from "@/components/layouts/footer";

function BuyersBoard() {
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
            {recentlyAddedMusic.map((data, index) => (
              <RecentlyAdded
                key={index}
                image={data.image}
                title={data.title}
                artist={data.artist}
                type={data.type}
              />
            ))}
          </div>
        </div>

        {/* History of Songs Purchased */}
        <div className="flex-1 bg-[#252B36] p-5 rounded-md">
          <h1 className="text-3xl py-5">History of Songs Purchased</h1>

          <div className="space-y-4">
            {purchaseHistory.map((data, index) => (
              <HistoryPurchase
                key={index}
                id={data.id}
                image={data.image}
                name={data.name}
                genre={data.genre}
                date={data.date}
                duration={data.duration}
              />
            ))}
          </div>
        </div>
      </div>

      <div className=" flex items-start p-10 gap-10 mb-10">

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
        </div>

      </div>
    <Footer/>
    </div>
  );
}

export default BuyersBoard;