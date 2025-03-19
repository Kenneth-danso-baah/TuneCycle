"use client"

import { carouselNft } from '@/lib/data';
import CarouselContent from './carouselContent'


function CarouselWrapper() {
  return (
    <div className="w-full">
      <CarouselContent carousel={carouselNft} />
    </div>
  );
}

export default CarouselWrapper;
