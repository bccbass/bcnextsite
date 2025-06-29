import React from "react";
// import Modal from "@/components/Modal";
// import Contact from "@/components/Contact";
import Link from "next/link";

const ContactCTA = () => {
  return (
    <div className="my-20 md:my-32 w-screen md:w-md bg-secondary md:outline-4 py-20 md:py-12 px-12 outline-neutral-200 shadow-2xl md:rounded-md flex flex-col items-center gap-6">
      <h3 className="section-title text-center">Oh, hey</h3>
      <p className="text-xl font-semibold text-center">
        I always love chatting about music, so feel free to...
      </p>

      {/* <Modal title="Drop me a line">
        <Contact formFirst={true}/>
      </Modal> */}
      <Link
        href="/#hello"
        className="cta-button max-w-md w-full text-center uppercase"
      >
        Drop me a line
      </Link>
    </div>
  );
};

export default ContactCTA;
