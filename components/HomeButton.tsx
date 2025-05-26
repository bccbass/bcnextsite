import React from 'react'
import Link from 'next/link'
const HomeButton = () => {
  return (
    <div className="w-full flex justify-center my-20">
        <Link href={'/'} className="rounded-btn">
            <span className="className=' text-center text-neutral-200 text-xl'">Home</span>
        </Link>
        </div>

  )
}

export default HomeButton