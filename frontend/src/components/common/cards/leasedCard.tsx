import { Button } from '@/components/ui/button'
import Image from 'next/image'


// Add props interface
interface LeasedCardProps {
  imageSrc: string;
  amount: string;
  duration: string;
  title: string;
  onClick: () => void;
}

function LeasedCard({ imageSrc, amount, duration, title, onClick }: LeasedCardProps) {
  return (
    <div className='p-5 w-full bg-[#252B36] rounded-xl'>
        <div className='flex items-center justify-between'>
          <div className='space-y-2'>
            <h1 className='text-[12px]'>Song Title</h1>
            <Image src={imageSrc} width={50} height={50} alt='hulio'/>
          </div>

          <div>
            <h1 className='font-bold'>{title}</h1>
          </div>

          <div>
          <Image src="/images/press_play.svg" width={50} height={50} alt='hulio'/>
          </div>
        </div>

        {/* <div className='py-5 space-y-3 font-bold'>
          <h1>Request By</h1>
          <div className='flex gap-3 items-center'>
            <Image src={imageSrc} alt="" width={40} height={40}/>
            <h1>Monoliver Advertising Agency</h1>
          </div>
        </div> */}

        <div className='font-bold flex items-center justify-between py-10'>
          <div className='font-bold space-y-3'>
            <h1>Amount</h1>
            <p>{amount} Eth</p>
          </div>

          <div className='font-bold space-y-3'>
            <h1>Duration</h1>
            <p>{duration} Years</p>
          </div>
        </div>

        <div className='space-y-5'>
          <h1 className='font-bold'>List Music For It to be Available</h1>
          <div className='flex gap-5'>
            <Button 
              className='text-[#000] font-extrabold rounded-[5px] bg-[#00DF82] py-2' 
              onClick={onClick}
            >
              List Music
            </Button>
          </div>
        </div>

    </div>
  )
}

export default LeasedCard