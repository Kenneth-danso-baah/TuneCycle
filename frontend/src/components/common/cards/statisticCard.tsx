import { IoInformationCircleOutline } from 'react-icons/io5'
import { MdKeyboardArrowDown } from 'react-icons/md'


interface StatsProps{
   name:string;
   amount:string;
   info:string;
   base:string;
}

function StatisticCard({name,amount,base,info}: StatsProps) {
  return (
    <div className='w-full rounded-[10px]  bg-[#252B36] p-5 space-y-5'>
    <div className='flex items-center gap-3'>
       <h1 className='text-[20px] font-bold text-[#A2A8B4] capitalize'>{name}</h1>
       <IoInformationCircleOutline className='text-[20px] text-[#A2A8B4]'/>
    </div>

    <div>
       <h1 className='text-6xl font-monoBold'> {amount} ETH</h1>
    </div>

    <div>
       <h1 className='text-[#A2A8B4] text-[20px]'>{info}</h1>
    </div>

    <div className='w-full h-[0.5px] bg-[#A2A8B4]'/>

    <div className='text-[20px] text-[#A2A8B4] font-extrabold flex gap-2'>
       <h1>{base}</h1>
       <MdKeyboardArrowDown/>
    </div>
</div>
  )
}

export default StatisticCard