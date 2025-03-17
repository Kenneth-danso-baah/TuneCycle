import Image from "next/image";
import { HiDotsHorizontal } from "react-icons/hi";

interface RecentlyAddPropsMusic {
  image: string;
  title: string;
  artist: string;
  type: string;
}

function RecentlyAdded({ image, title, artist, type }: RecentlyAddPropsMusic) {
  return (
    <div className="flex items-center gap-5 w-full mb-3 border border-b border-t-0 border-r-0 border-l-0">
   
      <div className="flex items-center gap-5 flex-1 min-w-0">
        <Image
          src={image}
          alt={`${image}.txt`}
          width={60}
          height={60}
          className="rounded-md object-cover w-10 h-10"
        />
        <div className="place-self-end min-w-0">
          <h1 className="font-monoLight truncate">{title}</h1>
        </div>
      </div>

      {/* Artist */}
      <div className="place-self-end flex-1 min-w-0">
        <h1 className="truncate">{artist}</h1>
      </div>

      {/* Type */}
      <div className="place-self-end flex-1 min-w-0">
        <h1 className="truncate">{type}</h1>
      </div>

      {/* Dots Icon */}
      <div className="place-self-end">
        <HiDotsHorizontal />
      </div>
    </div>
  );
}

export default RecentlyAdded;