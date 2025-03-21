'use client'

import { IoInformationCircleOutline } from "react-icons/io5"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, LabelList } from "recharts"
import {
    ChartContainer,
} from "@/components/ui/chart"
import { useEffect, useState } from 'react';
import { readUserListings } from "@/lib/integrations/viem/contract";
import { usePrivy } from "@privy-io/react-auth";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#32D74B"
  },
  mobile: {
    label: "Mobile",
    color: "#007AFF"
  },
};

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

// Add this interface to define the structure of chart data
interface ChartData {
  month: string;
  desktop: number;
}

function ChartA(

) {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const { user} = usePrivy()
  const walletAddress = user?.wallet?.address;
  const [, setListing] = useState<Listing[]>();
  const [totalSongs, setTotalSongs] = useState<number>(0);
  const [totalListed, setTotalListed] = useState<number>(0);
  const [totalUnlisted, setTotalUnlisted] = useState<number>(0);

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

  useEffect(() => {
   
    setChartData([
      { month: 'Total Songs', desktop: totalSongs },
      { month: 'Total Listed', desktop: totalListed },
      { month: 'Total Unlisted', desktop: totalUnlisted },
    ]);
  }, [totalSongs, totalListed, totalUnlisted]);

  return (
    <div className="p-5 ">

      <div className='flex items-center gap-3 py-10'>
        <h1 className='text-[15px] text-nowrap font-bold text-[#A2A8B4] capitalize lg:text-[20px]'>Wallet Balance, USD</h1>
        <IoInformationCircleOutline className='text-[20px] text-[#A2A8B4]'/>
      </div>


      <ChartContainer config={chartConfig}>
        <BarChart data={chartData} width={500} height={300}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          
        <XAxis 
         dataKey="month"
         tickLine={false} 
        tickMargin={10} 
        axisLine={false} 
        tick={{ fill: "#FFFFFF", fontSize: 14, fontWeight: "bold" }} 
        tickFormatter={(value) => value.slice(0, 3)}
        />


          
          <YAxis hide />
          
          <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={4}>
            <LabelList dataKey="desktop" position="top" fill="white" fontSize={14} />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  )
}

export default ChartA;
