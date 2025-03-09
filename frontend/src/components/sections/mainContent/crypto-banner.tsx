import Image from 'next/image'
import Binace from '../../../../public/images/binance.svg'
import TrustWallet from '../../../../public/images/trustwallet.svg'
import Meta from '../../../../public/images/meta.svg'



function CryptoBanner() {
  return (
    <div className='bg-brand-deep py-5 px-10 mb-20 md:mb-32 shadow-md gap-10 items-center flex flex-col lg:flex-row md:items-center lg:justify-between'>
        <Image src={Binace}  alt='' width={200} height={100}/>
        <Image src={TrustWallet} alt='' width={200} height={100}/>
        <Image src={Meta} alt='' width={200} height={100}/>
    </div>
  )
}

export default CryptoBanner