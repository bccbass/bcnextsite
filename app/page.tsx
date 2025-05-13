import React from 'react'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Footer from '@/components/sections/Footer'
import { getWebsiteData } from "@/lib/fetch";


const page = async () => {

  const websiteData = await getWebsiteData();
  console.log('data',  websiteData.briefBiography)


  return (
    <div
    // style={{backgroundImage: 'url(/vintage-wallpaper.webp)'}}
    className='flex flex-col'>
      <Hero />
      <About briefBiography={websiteData.briefBiography} />
      <Footer/>

    </div>
  )
}

export default page