import { Button } from '@/components/ui/button'
import Image from 'next/image'

function LeasedCard() {
  return (
    <div className='p-5 w-full bg-[#252B36] rounded-xl'>
        <div className='flex items-center justify-between'>
          <div className='space-y-2'>
            <h1 className='text-[12px]'>Song Title</h1>
            <Image src="/images/muse_cover.svg" width={50} height={50} alt='hulio'/>
          </div>

          <div>
            <h1 className='font-bold'>Falling together apart</h1>
          </div>

          <div>
          <Image src="/images/press_play.svg" width={50} height={50} alt='hulio'/>
          </div>
        </div>

        <div className='py-5 space-y-3 font-bold'>
          <h1>Request By</h1>
          <div className='flex gap-3 items-center'>
            <Image src="/images/mgg.svg" alt="" width={40} height={40}/>
            <h1>Monoliver Advertising Agency</h1>
          </div>
        </div>


        <div className='font-bold flex items-center justify-between py-10'>

          <div className='font-bold space-y-3'>
            <h1>Amount</h1>
            <p>$20,000.00</p>
          </div>

          <div className='font-bold space-y-3'>
            <h1>Duration</h1>
            <p>2Years</p>
          </div>
        </div>

        <div className='space-y-5'>
          <h1 className='font-bold'>Negotiation Requested</h1>
          <div className='flex gap-5'>
            <Button className='text-[#000] font-extrabold rounded-[5px] bg-[#00DF82] py-2'>Accept</Button>
            <Button className='text-[#fff] font-extrabold rounded-[5px] bg-[#FF0000] py-2'>Deny</Button>
          </div>
        </div>

    </div>
  )
}

export default LeasedCard