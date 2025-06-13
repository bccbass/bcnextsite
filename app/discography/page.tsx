import React from 'react'
import PageWrapper from "@/components/PageWrapper";
import DiscogAlbums from '@/components/DiscogAlbums';

import { getDiscographyData } from "@/lib/fetch";


const page = async () => {
    const discographyData = await getDiscographyData();
    console.log('discog', discographyData.albums);
  return (
    <PageWrapper title="studio">
        <DiscogAlbums albums={discographyData.albums} />
        
    </PageWrapper>
  )
}

export default page