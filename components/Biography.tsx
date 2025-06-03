import React from 'react'
import { PortableTextBlock } from 'next-sanity'
// import { PortableText } from '@portabletext/react'
import CustomPortableText from './CustomPortableText'
const Biography = ({biography}:{biography: PortableTextBlock[] | string }) => {
  return (

        <article className="prose prose-xl text-white">
        {typeof biography !== 'string' ?  <CustomPortableText value={biography} /> : <div>{biography}</div>}
        </article>

  )
}

export default Biography