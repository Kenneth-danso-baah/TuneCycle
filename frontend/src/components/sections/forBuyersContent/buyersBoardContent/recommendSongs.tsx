import Image from "next/image";
import React from "react";

interface RecommendSongsProps {
  image: string;
  title: string;
  artist: string;
  genre: string;
}

function RecommendSongs({ image, title, artist, genre }: RecommendSongsProps) {
  return (
    <div className="w-56 space-y-5">
      {/* Image Container */}
      <div className="bg-red-500 w-44 h-44 rounded-full grid place-items-center">
        <Image
          src={image}
          alt=""
          width={200}
          height={200}
          className="rounded-full w-40 h-40  object-cover"
        />
      </div>

      {/* Text Container */}
      <div className="flex flex-col items-center space-y-3">
        <h1 className="text-center">{title}</h1>
        <h1>{artist}</h1>
        <h1>{genre}</h1>
      </div>
    </div>
  );
}

export default RecommendSongs;