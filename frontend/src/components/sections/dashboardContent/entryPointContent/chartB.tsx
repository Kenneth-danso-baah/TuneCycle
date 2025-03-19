'use client'

import { IoInformationCircleOutline } from "react-icons/io5"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, LabelList } from "recharts"
import {
    ChartContainer,
} from "@/components/ui/chart"
import { leasingData } from "@/lib/data";


const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#FFA500"
    },
    mobile: {
      label: "Mobile",
      color: "#007AFF"
    },
  };


function ChartB() {
  return (
<div className="p-5 flex flex-col h-full">
  {/* Title */}
  <div className="flex items-center gap-3 py-10">
    <h1 className="text-[20px] font-bold text-[#A2A8B4] capitalize">Leases</h1>
    <IoInformationCircleOutline className="text-[20px] text-[#A2A8B4]" />
  </div>



    <ChartContainer config={chartConfig} className="flex-grow text-white">
      <BarChart data={leasingData} width={500} height={300}>
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

export default ChartB