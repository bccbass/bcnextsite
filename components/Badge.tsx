import React from 'react'
import Link from 'next/link'

const Badge = ({color}:{color?: string}) => {
  return (
    <Link href={"/"} className={`uppercase col-centered w-fit  gap-2 overflow-hidden  p-4` }>
          <h1 className={`${color} badge-title text-4xl  uppercase md:text-6xl lg:text-7xl -tracking-[.15rem]`}>
            Benjamin Campbell
          </h1>
          <h2 className={`${ color } text-sm sm:text-xl font-feature md:text-lg md:tracking-[.12rem]`}>
            Bassist | Composer | Educator
          </h2>
        </Link>
  )
}

export default Badge