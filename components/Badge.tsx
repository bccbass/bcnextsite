import React from 'react'
import Link from 'next/link'

// const badgeStyle = 'text-center  text-5xl sm:text-7xl  xl:text-[5.2rem] -tracking-[.15rem] drop-shadow-[3px_3px_1px_rgba(37,150,190)] text-accent/80 font-bold  uppercase'
const Badge = () => {
  return (
    <Link href={"/"} className={`uppercase col-centered w-fit  gap-2 overflow-hidden p-4` }>
          <h1 className='text-center  text-5xl sm:text-7xl  xl:text-[5.2rem] -tracking-[.15rem] drop-shadow-[3px_3px_1px_rgba(37,150,190)] text-accent/80 font-bold  uppercase'>
            Benjamin
          </h1>
          <h1 className='text-center  text-5xl sm:text-7xl  xl:text-[5.2rem] -tracking-[.15rem] drop-shadow-[3px_3px_1px_rgba(37,150,190)] text-accent/80 font-bold  uppercase'>
             Campbell
          </h1>
          <h2 className={`text-center text-md sm:text-xl font-feature font-bold md:text-lg md:tracking-[.12rem]`}>
            Bassist | Composer | Educator
          </h2>
        </Link>
  )
}

export default Badge