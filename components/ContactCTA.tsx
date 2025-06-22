import React from "react";
import Modal from "@/components/Modal";
import Contact from "@/components/Contact";

const ContactCTA = () => {
  return (
    <div className="my-20 md:my-32 w-md bg-secondary outline py-8 px-12 outline-neutral-200 shadow-2xl rounded-md flex flex-col items-center gap-6">
      <h3 className="section-title">Oh, hey!</h3>
      <p className="text-xl font-semibold">
        If you have found anything in these pages interesting, would like to
        collaborate, or just say hello...
      </p>

      <Modal title="Drop me a line!">
        <Contact formFirst={true}/>
      </Modal>
    </div>
  );
};

export default ContactCTA;
