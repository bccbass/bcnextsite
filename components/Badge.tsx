import React from 'react'
import Link from 'next/link'

const badgeStyle = 'text-center badge-title text-5xl sm:text-6xl  sm:text-7xl  xl:text-[5.2rem] -tracking-[.15rem]'
const Badge = ({color}:{color?: string}) => {
  return (
    <Link href={"/"} className={`uppercase col-centered w-fit  gap-2 overflow-hidden p-4` }>
          <h1 className={`${color} ${badgeStyle}`}>
            Benjamin
          </h1>
          <h1 className={`${color} ${badgeStyle}`}>
             Campbell
          </h1>
          <h2 className={`${ color } text-center text-md sm:text-xl font-feature font-bold md:text-lg md:tracking-[.12rem]`}>
            Bassist | Composer | Educator
          </h2>
        </Link>
  )
}

export default Badge