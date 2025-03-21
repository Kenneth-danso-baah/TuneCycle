import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, {useEffect, useRef, useState} from 'react'



interface LeasedCardProps {
  imageSrc: string;
  amount: string;
  musicUrl?:string;
  duration: string;
  artiste:string;
  title: string;
  onClick: () => void;
}



function LeasedCard({ imageSrc, amount, duration, title, onClick, artiste,musicUrl }: LeasedCardProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
      console.log("Music URL:", musicUrl);
    }, [musicUrl]);

    const togglePlay = () => {
      console.log("Play button clicked");
      if (!audioRef.current) {
        console.error("audioRef is not set");
        return;
      }
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Failed to play audio:", error);
          setIsPlaying(false);
        });
      }
      setIsPlaying(!isPlaying);
    };

      useEffect(() => {
        if (audioRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      }, [musicUrl]);



  return (
    <div className='p-5 w-full bg-gradient-to-br from-[#101111] via-[#1a1b1b] to-[#00ffcc] rounded-xl'>
        <div className='flex items-center justify-between'>
          <div className='space-y-2'>
            <h1 className='text-[12px]'>Song Title</h1>
            <Image src={imageSrc} width={50} height={50} alt='hulio'/>
          </div>

          <div>
            <h1 className='font-bold'>{title}</h1>
          </div>

          <button onClick={togglePlay} className="cursor-pointer">
            <Image
              src={isPlaying ? '/images/playbutton.svg' : '/images/pause.png' } 
              alt="Play Button"
              width={50}
              height={50}
              style={{ objectFit: 'cover' }}
            />
          </button>

        </div>

        <div className='py-5 space-y-3 font-bold'>
          <h1>Artist</h1>
          <div className='flex gap-3 items-center'>
            <h1>{artiste}</h1>
          </div>
        </div>

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
              Lease Music
            </Button>
          </div>
        </div>

        {musicUrl && (
        <audio
          ref={audioRef}
          src={musicUrl}
          onEnded={() => setIsPlaying(false)}
        />
      )}

    </div>
  )
}

export default LeasedCard