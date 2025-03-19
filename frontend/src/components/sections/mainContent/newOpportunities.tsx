import Image from 'next/image'



function NewOpportunities() {
  return (
    <div className='p-5 lg:p-0 flex flex-col  lg:flex-row w-full  gap-10 md:gap-32 h-[80%]'>
        <div className='lg:ml-20 flex-[40%] space-y-5 md:space-y-10'>
            <h1 className='text-[28px] text-center font-bold md:text-[35px] space-y-5'>New Beats, New Opportunities</h1>
            <p className='w-full font-bold md:text-[20px] md:leading-[2rem]'>Discover the latest tracks available and find the perfect fit for your project. Fresh music, fresh ideas - right at your fingertips</p>

            <div>
            <Image src='/images/male.svg' className=' w-full transform scale-x-[-1]  object-contain' width={200} height={200} alt="gee"/>
            </div>
        </div>

        <div className='lg:mr-20 flex-[60%]'>
         <Image src='/images/graffiti.svg' className='object-cover w-full h-[78%] rounded-[20px]' width={600} height={600} alt="gee"/>
        </div>

    </div>
  )
}

export default NewOpportunities