import React from 'react'
import { getSections } from '@/lib/fetch'

import Section from '../Section'


const Explore = async () => {

    const sections = await getSections()

    return (
    <div className='section flex md:flex-col flex-wrap justify-center items-center w-full gap-16 md:gap-30'>
      {  sections.map((section, i) => <Section key={section._id} title={section.title} slug={section.slug.current} image={section.imageUrl} description={section.description} i={i}/>
        )
}
    </div>
  )
}

export default Explore