import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Curves from '../../../components/common/curves'
import Link from 'next/link'

function BaseContent() {
  return (
    <div className='relative mb-32'>
    <div className='h-dvh  flex items-center gap-20 leftRightSpacing '>
        <div className='flex-[50%] space-y-10 z-30'>
            <h1 className='text-5xl uppercase w-[90%] text-center font-monoBold '>monetize yOUR mUSIC ON YOUR TERMS </h1>
            <p className='text-[20px] font-bold leading-[2rem] '>Take control of your music&apos;s revenue potential. Lease your tracks directly to a global network of creators while retaining 
                ownership. Set your own terms, reach 
                new audiences, and build a sustainable music career with BeatBack</p>

                <div className='grid place-content-center'>
                    <Link href="/dashboard" className='text-[18px] font-bold bg-btn-gradient py-4  px-10 rounded-[5px]'>Lease Your Music</Link>
                </div>
        </div>

        <div className='flex-[50%] w-full'>
            <Image src='/images/lady_melody.svg' alt="melody" width={700} height={700}/>
        </div>
        </div>

        <div className='absolute top-0 w-full'>
            <Curves/>
         </div>
    </div>
  )
}

export default BaseContent