import React from 'react'
import { PortableTextBlock } from 'next-sanity'
import { PortableText } from '@portabletext/react'
const Biography = ({biography}:{biography: PortableTextBlock[] | string }) => {
  return (
    <div className="flex flex-col gap-16">
      <div className="  flex flex-col md:flex-row gap-6 md:gap-16 lg:gap-20">
        <h2 className="section-title text-accent">About</h2>
        <article className="prose prose-xl  ">
        {typeof biography !== 'string' ?  <PortableText value={biography} /> : <div>{biography}</div>}
        </article>
      </div>

    </div>
  )
}

export default Biography