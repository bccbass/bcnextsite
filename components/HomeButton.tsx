import React from 'react'
import Link from 'next/link'
const HomeButton = () => {
  return (
    <div className="w-full flex justify-center  mb-16 md:mb-40">
        <Link href={'/'} className="rounded-button">
            <span className="className=' text-center text-neutral-200 text-xl'">Home</span>
        </Link>
        </div>

  )
}

export default HomeButton