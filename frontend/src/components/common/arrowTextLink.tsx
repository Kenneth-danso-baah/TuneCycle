import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";


function ArrowTextLink({name,href}:{name:string,href:string}) {
  return (
        <div className='flex items-center justify-center   gap-2 font-extrabold'>
            <Link href={href} className='font-mono text-[25px] capitalize'>
                 {name}
                </Link>
                <LuArrowUpRight  className='text-3xl'/>
            </div>
        )
}

export default ArrowTextLink
