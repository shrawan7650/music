'use client'
import React from 'react'
import { BackgroundGradient } from './background-gradient'
import courseData from '../data/music_courses.json'
import Link from 'next/link'

interface Cources{
  id: number,
      title: string,
      slug: string,
      description: string,
      price:number,
      instructor:string,
      isFeatured: boolean,
     
}

const Cards = () => {
  const data = courseData.courses.filter((course:Cources)=> course.isFeatured)
  return (
   <section className='py-12 bg-gray-900'>
    <div className='text-center text-base font-semibold text-teal-600 tracking-wide uppercase'><h2>Featured Cources</h2><p className='text-3xl leading-8 font-extrabold tracking-tight mt-2 text-white'>Learn with the Best</p></div>


    <div className='mt-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8'>
        {
          data.map((item=>(
         
         <div key={item.id} className='flex justify-center'>
          <BackgroundGradient  className=" flex flex-col overflow-hidden text-center h-full  rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <div className='flex flex-col text-center p-4 sm:p-6 flex-grow'>
            <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{item.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{item.description}</p>
              <Link href={`/courses/${item.slug}`}>
              </Link>
            </div>
          </BackgroundGradient>
         </div>
          )))
        }
      </div>
    </div>




    <div className='mt-20 text-center'>
     <Link href={"/courses"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200 scale-75'>
      view all courses
     </Link>
      </div>

   </section>
  )
}

export default Cards