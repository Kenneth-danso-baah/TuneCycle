import Image from 'next/image'



function CryptoBanner() {
  return (
    <div className='bg-brand-deep py-5 px-10 mb-20 md:mb-32 shadow-md gap-10 items-center flex flex-col lg:flex-row md:items-center lg:justify-between'>
        <Image src='/images/binance.svg'  alt='bd' width={200} height={100}/>
        <Image src='/images/trustwallet.svg'alt='tl' width={200} height={100}/>
        <Image src='/images/meta.svg'  alt='mt' width={200} height={100}/>
    </div>
  )
}

export default CryptoBanner