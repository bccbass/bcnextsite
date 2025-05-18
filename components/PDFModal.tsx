"use client";
import React from "react";
import Modal from "./Modal";

const PDFModal = ({ pdf }: { pdf: { title: string; url: string } }) => {

  return (
    <Modal pdfBtn={true} title={pdf.title} isPdf={true}>
      <iframe
        src={`${pdf.url}#toolbar=0&statusbar=0&view=FitH`}
        title={pdf.title}
        width="100%"
        height="100%"
        style={{ border: "none", overflow: "scroll" }}
      />
    </Modal>
  );
};

export default PDFModal;
