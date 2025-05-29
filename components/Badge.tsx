import React from 'react'
import Link from 'next/link'

const Badge = ({color}:{color?: string}) => {
  return (
    <Link href={"/"} className={`uppercase col-centered w-fit  gap-2 overflow-hidden  p-4` }>
          <h1 className={`${color} text-center badge-title text-5xl  uppercase sm:text-5xl md:text-6xl lg:text-7xl -tracking-[.15rem]`}>
            Benjamin Campbell
          </h1>
          <h2 className={`${ color } text-center text-md sm:text-xl font-feature md:text-lg md:tracking-[.12rem]`}>
            Bassist | Composer | Educator
          </h2>
        </Link>
  )
}

export default Badge