import Image from 'next/image'


interface IntroductionProps{
    title:string;
    image:string;
    description:string;
}

function IntroductionCard({title,image,description}:IntroductionProps) {
  return (
    <div className="max-w-[500px] py-14  p-3 bg-[#1F2231]">

            <div className='flex flex-col items-center justify-center space-y-3 mb-10'>
                <Image src={image} width={50} height={50} alt="gee"/>
                <h1 className='text-2xl text-nowrap font-bold capitalize text-brand-gold-color'>{title}</h1>
            </div>



        <div className='mx-2 text-[18px] font-bold'>
            <p className='leading-[2rem] text-center'>{description}</p>
        </div>
    </div>
  )
}

export default IntroductionCard