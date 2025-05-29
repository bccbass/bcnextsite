import React from 'react'
import { PortableTextBlock } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import NavMenuItems from "./NavMenuItems";

const Biography = ({biography}:{biography: PortableTextBlock[] | string }) => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col md:flex-row gap-6 md:gap-16 lg:gap-20">
        <div >
        <h2 className="section-title text-accent">About</h2>
        <div className='md:flex flex-col gap-4 text-sm py-30 hidden'>
          <NavMenuItems classStyle='inset-menu-item'/>
        </div>
        </div>
        <article className="prose prose-xl text-white">
        {typeof biography !== 'string' ?  <PortableText value={biography} /> : <div>{biography}</div>}
        </article>
      </div>

    </div>
  )
}

export default Biography