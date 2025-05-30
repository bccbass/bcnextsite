import React from 'react'
import { getSections } from '@/lib/fetch'

import Section from '../Section'


const Explore = async () => {

    const sections = await getSections()

    return (
    <div className='section flex flex-col md:flex-row flex-wrap justify-center items-center gap-16'>
      {  sections.map((section, i) => <Section key={section._id} title={section.title} slug={section.slug.current} image={section.imageUrl} description={section.description} i={i}/>
        )
}
    </div>
  )
}

export default Explore