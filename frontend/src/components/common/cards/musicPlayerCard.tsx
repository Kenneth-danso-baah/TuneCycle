import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';


type CardPropsMusic={
    mainImage:string;
    subImage:string;
    title:string;
    artist:string;
    price:string;
    duration:string;
    onClick: () => void;
}



function MusicPlayerCard({mainImage,subImage,artist,duration,title, onClick}:CardPropsMusic) {
    return (
  
        <div className=" w-96 border border-brand-mouve rounded-[10px] h-auto py-5 bg-music-card-gradient font-poppins mb-10">
             <div className="mx-5">
                <div className="shadow-2xl">
                    <Image src={mainImage} alt="" width={200} height={150} className="w-full rounded-[15px] h-[30vh]"style={{'objectFit':'cover'}}/>
                </div>
    
                <div className="flex items-center justify-between mt-5">
                    <div>
                    <Image src={subImage} alt="" width={50} height={50} className=""style={{'objectFit':'cover'}}/>
                    </div>
    
                    <div>
                        <h1 className="text-[20px] font-bold capitalize">{title}</h1>
                        <p className="font-light text-[#ccc]">{artist}</p>
                    </div>
    
                    <div>
                    <Image src='/images/playbutton.svg' alt="" width={50} height={50} className=""style={{'objectFit':'cover'}}/>
                    </div>
                </div>
    
                <div className="flex items justify-between capitalize font-bold py-5">

    
                    <div>
                        <h1>{duration} ETH</h1> 
                    </div>
                </div>
    
                <div className="mt-5">
                    <Button className="bg-btn-gradient w-full p-8 text-2xl font-bold rounded-[5px] capitalize"
                    onClick={onClick}
                    >Purchase</Button>
                </div>
             </div>
        </div>
        
      
      )
    }
    
    
export default MusicPlayerCard