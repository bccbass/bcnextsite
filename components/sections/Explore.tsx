import React from 'react'
import { getSections } from '@/lib/fetch'

import FeatureCard from '../FeatureCard'


const Explore = async () => {

    const sections = await getSections()

    return (
    <div className='pt-12 px-6 pb-30 md:pb-48 flex flex-wrap justify-center gap-x-16 gap-y-8
    4 xl:gap-32'>
      {  sections.map((section) => <FeatureCard key={section._id} title={section.title} slug={section.slug.current} image={section.imageUrl} 
      // description={section.description} 
      />
        )
}
    </div>
  )
}

export default Explore