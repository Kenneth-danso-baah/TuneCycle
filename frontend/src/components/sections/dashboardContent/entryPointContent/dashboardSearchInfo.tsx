"use client"
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdAccountBalanceWallet } from "react-icons/md";
import { usePrivy } from "@privy-io/react-auth";


function DashboardHeaderSearchInfo({dashboard_location}:{dashboard_location:string}) {
    const {user} = usePrivy();
    const walletAddress = user?.wallet?.address

  return (
    <div className="flex items-center w-full justify-between gap-5">

        <div className='flex items-center gap-2 flex-[10%]'>
            <RiArrowLeftSLine className="text-[15px] lg:text-3xl "/>
            <span className="font-monoBold lg:text-[20px] text-nowrap">{dashboard_location}</span>
        </div>



        <div className=" hidden  lg:flex items-center gap-5">
            <MdAccountBalanceWallet className="hidden text-4xl lg:block "/>

            <div className="flex items-center gap-3">
                 <h1 className='font-bold font-poppins lg:text-[20px] '>{walletAddress?.slice(0,6)}...{walletAddress?.slice(-4)}</h1>
            </div>
        </div>
    </div>
  )
}

export default DashboardHeaderSearchInfo