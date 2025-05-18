'use client'
import React from 'react'
import PDFModal from "@/components/PDFModal";
import PDFLink from "@/components/PDFLink";
import useMedia from "@/hooks/useMedia"; 

type PDFContainerProps = {
    pdfs: {
    title: string;
    url: string
}[]}
const PDFContainer = ({pdfs}:PDFContainerProps) => {
  const isMobile = useMedia("(max-width: 540px)");

  return (
    <>
      {pdfs.map((pdf: { title: string; url: string }, i: number) =>
        isMobile ? (
          <PDFLink key={i} pdf={pdf} />
        ) : (
          <PDFModal key={i} pdf={pdf} />
        ),
      )}
    </>
  );
}

export default PDFContainer