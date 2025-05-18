"use client";
import React from "react";
import Link from "next/link";

const PDFLink = ({ pdf }: { pdf: { title: string; url: string } }) => {

  return (
    <Link
      key={pdf.title}
      className="pdf-button "
      href={pdf.url}
      target="_blank"
      rel="noopener noreferrer"
      
    >
      {pdf.title}
    </Link>
  );
};

export default PDFLink;
