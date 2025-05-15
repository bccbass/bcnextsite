import React from 'react'
import Link from 'next/link'
import Socials from '../Socials'

const Footer = async () => {

  return (
    <footer className='w-screen bg-primary text-white'>
        <div className="flex justify-around mx-auto px-10 md:px-20 py-16 md:py-20 gap-16 flex-wrap max-w-7xl ">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 flex-1  ">
                <h4 className='font-semibold uppercase text-xl font-feature'>Section</h4>
                <div className="flex flex-col gap-2">
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>About</Link>
                <Link href={'/'}>Explore</Link>
                <Link href={'/'}>Process</Link>
                <Link href={'/'}>Studio</Link>
                <Link href={'/'}>Contact</Link>
            </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 flex-1  ">
                <h4 className='font-semibold uppercase text-xl font-feature'>Explore</h4>
                <div className="flex flex-col gap-2">
                
                <Link href={'/'}>Bass</Link>
                <Link href={'/'}>Production</Link>
                <Link href={'/'}>Assembly</Link>
                <Link href={'/'}>BATTAB</Link>
                <Link href={'/'}>Kimono Dragon</Link>
            </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 flex-1  ">
                <h4 className='font-semibold uppercase text-xl font-feature'>Process</h4>
                <div className="flex flex-col gap-2">
                
                {/* replace with dynamic article links */}
                <Link href={'/'}> → New song and video ‘Two Feet’ out now </Link>
                <Link href={'/'}> → Transcription: JMJ’s bassline on Paper Tiger </Link>
                <Link href={'/'}> → Transcription: Larry Grenadiers’ solo on CTA from Mehldau’s ‘Live at Village Vanguard’</Link>
            </div>
            </div>
        </div>
        <Socials />
        <p className='w-full text-center text-xs md:text-sm uppercase' >Benjamin Campbell © 2025</p>
    </footer>
  )
}

export default Footer