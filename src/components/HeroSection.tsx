import Link from 'next/link'
import React from 'react'

import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

const HeroSection = () => {
  return (
    <div 
    className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-48 md:py-0    '>

<Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
    <div className=' p-4 relative z-10 w-full text-center '>
      <h1 className='text-4xl md:mt-0 md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-50 '>Master the Art of Music</h1>
     
      <p className=' font-normal text-base text-neutral-300 max-w-lg mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, non consequuntur. Similique alias dolorum expedita officiis. Est molestias tenetur, ratione non recusandae explicabo nesciunt sequi maxime corrupti, voluptatum officiis temporibus.</p>
 
    <div className='mt-4'> 
    <Link href={"/courses"}>
    <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
       Explore Cources
      </Button>
    </Link>
    </div>
    </div>
      
      
      </div>
  )
}

export default HeroSection