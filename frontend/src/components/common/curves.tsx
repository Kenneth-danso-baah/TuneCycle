import Image from 'next/image';



function Curves() {
  return (
    <div className="flex items-center justify-center h-[10vh] z-10 relative"> 
      <div className="relative w-full h-full">
      <Image
        src='/images/curve1.svg'
         alt="client-1"
        className="absolute top-0 -left-[1rem] scale-x-[-1]"  
        width={200}
        height={200}
        style={{ objectFit: 'contain' }} 
    />

        <Image
          src='/images/curve2.svg'
          alt="client-2"
          className="absolute top-0 -left-10 scale-x-[-1]"
          width={400}
          height={350}
          style={{ objectFit: 'contain' }} 
        />

         <Image
          src='/images/curve3.svg'
          alt="client-2"
          className="absolute -top-2 -left-12 scale-x-[-1]"
          width={600}
          height={600}
          style={{ objectFit: 'contain' }} 
        />

      </div>
    </div>
  );
}

export default Curves;
