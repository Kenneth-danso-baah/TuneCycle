import ArrowTextLink from '@/components/common/arrowTextLink'
import Image from 'next/image'



function OwnSound() {
  return (
    <div className='p-5 lg:p-0 lg:leftRightSpacing flex flex-col mb-20 lg:flex-row items-center gap-10 md:gap-36 md:mb-32'>
        <div className='flex-[50%]'>
            <Image src='/images/cover-male.svg' className='w-full' width={500} height={500} alt=''/>
        </div>

        <div className='flex-[50%] space-y-5 place-self-start'>
            <div>
            <h1 className='font-monoBold text-[25px]  md:text-[35px] capitalize'>Own your sound, set your terms</h1>
            <p className='font-bold lg:max-w-[90%] mt-5 md:mt-0 md:leading-[3rem] md:text-[18px]'>Take the complexity out of music licensing with BeatBack.  Effortlessly set your lease terms, from short-term usage to long-term exclusives, and choose the pricing that works for you.  Reach a broad audience without the hassle of traditional licensing agreements.  BeatBack simplifies the process, allowing 
                you to focus on what you do best: creating exceptional music</p>
            </div>

            <ArrowTextLink name='Leased now' href='/contacts'/>

        </div>
    </div>
  )
}

export default OwnSound