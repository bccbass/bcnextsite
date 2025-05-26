import React from 'react'
import Link from 'next/link'

const Badge = ({color}:{color?: string}) => {
  return (
    <Link href={"/"} className={`font-feature uppercase col-centered w-fit  gap-2 ` }>
          <h1 className={`${color}  text-2xl sm:text-4xl md:text-4xl lg:text-5xl -tracking-[.15rem] font-semibold `}>
            Benjamin Campbell
          </h1>
          <h2 className={`${ color } text-sm sm:text-xl md:text-lg md:tracking-[.12rem]`}>
            Bassist | Composer | Educator
          </h2>
        </Link>
  )
}

export default Badge