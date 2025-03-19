import React from 'react'
import Image from 'next/image'

interface UnavailabeDataType  {
  title:string;
  description:string;
  image:string;
}



function NotFoundContent({title,image,description}:UnavailabeDataType) {
  return (
    <div className='h-auto'>
        <div className='grid place-content-center place-self-center py-5'>
            <h1 className=' text-3xl mb-5 text-center'>{title}</h1>

            <div className='mb-5'>
                <Image src={image} width={300} height={300} alt={`${image}.txt`}/>
            </div>

            <div>
                <p className='font-dmMono font-poppins text-center'>{description}</p>
            </div>

        </div>
    </div>
  )

}

export default NotFoundContent