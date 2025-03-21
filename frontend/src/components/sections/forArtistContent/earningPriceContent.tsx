import React from 'react'

import Image from 'next/image'
import EarnCard from '@/components/common/cards/earnCard'

function EarningPrice() {
  return (
    <div className='mb-20 lg:mb-40 mx-5 lg:leftRightSpacing'>
        <div className='mb-10 lg:mb-20'>
            <h1 className='text-[20px] text-center text-nowrap font uppercase lg:text-start md:text-3xl font-monoBold lg:text-5xl'>Pricing and earnings</h1>
        </div>

        <div className='flex flex-col lg:gap-2 gap-10 lg:flex-row'>
            <EarnCard
             p1='At TuneCycle, we believe in a straightforward and transparent commission structure. For every successful lease transaction on our platform, we take a 20% commission. '
             p2='This means that if you lease a track for 1 ETH, you will earn 0.8 ETH, and our fee will be 0.2 ETH. Currently, we operate with a flat 20% commission rate for all artists, ensuring fairness and simplicity. '
            p3='We are exploring potential tiered options for high-volume creators in the future. As a special offer, new artists who sign up within the next 30 days will receive a reduced commission rate of 15% on their first 5 leases.'
            />

            <div className='w-full'>
                <Image
                  src='/images/money_bar.svg'
                  width={600}
                  height={600}
                  className='w-full'
                  alt='bar'
                />
            </div>

            <EarnCard
             p1='TuneCycle empowers artists with flexible payment schedules. Choose to receive your earnings  after each successful lease, opt for a monthly payout, or accumulate your earnings for an annual payment. '
             p2='Different payment methods, including bank transfers, PayPal, and various cryptocurrency wallets, ensuring you can access your funds conveniently. To manage transaction costs, a minimum payout of 0.05 ETH is in place. '
            p3='A 1% transaction fee applies to most withdrawals, for processing, while direct bank transfers within the same region are processed without fees.'
            />
        </div>
    </div>
  )
}

export default EarningPrice