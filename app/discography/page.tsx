import React from 'react'
import PageWrapper from "@/components/PageWrapper";
import PageTitle from "@/components/PageTitle";
import DiscogAlbums from '@/components/DiscogAlbums';

import { getDiscographyData } from "@/lib/fetch";


const page = async () => {
    const discographyData = await getDiscographyData();
    console.log('discog', discographyData.albums);
  return (
    <PageWrapper>
        <PageTitle title="Discography" />
        <DiscogAlbums albums={discographyData.albums} />
        
    </PageWrapper>
  )
}

export default page