"use client";
// npm install react-hook-form @web3forms/react

import { useState } from "react";
import { useForm } from "react-hook-form";
import FadeInOut from "./FadeInOut";
import useWeb3Forms from "@web3forms/react";

const Contact = () => {
  const inputClassStyle =
    "bg-white/10 font-semibold border-gray-400  outline-none p-1 border-b backdrop-blur-lg";
  const { register, reset, handleSubmit } = useForm();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);

  const accessKey = "31670424-2432-4e48-8002-d7c5e175702e";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Benjamin Campbell",
      subject: "Website Hello!",
      // ... other settings
    },
    onSuccess: () => {
      setIsSuccess(true);
      setResult("Message sent - thank you");
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <div
      className="flex flex-col h-110 items-center justify-center w-full max-w-xl mb-12 p-12 rounded-2xl"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dyb9ascpy/image/upload/v1724818853/possumpark/bhchbbx8x1xdawpse9ih.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {!showForm && (
        <button className="theme-button " onClick={() => setShowForm(true)}>
          <span className="text-outline text-3xl "> Send a message</span>
        </button>
      )}

      {!isSuccess && showForm && (
        <FadeInOut>
          <div className="centered-col w-full relative">
            <form
              className="flex flex-col space-y-4 my-2 p-4 text-lg w-full max-w-lg "
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className={inputClassStyle}
                placeholder="Full Name"
                type="text"
                {...register("name", { required: true })}
              />
              <input
                className={inputClassStyle}
                placeholder="Email"
                type="email"
                {...register("email", { required: true })}
              />
              <textarea
                className={inputClassStyle}
                placeholder="Type your message"
                rows={2}
                {...register("message", { required: true })}
              ></textarea>

              <button className="theme-button" type="submit">
                Send Message
              </button>
            </form>
            <div className="pt-6 flex flex-col items-center gap-8 w-full">
              <button
                className="text-xl font-semibold underline"
                onClick={() => setShowForm(false)}
              >
                cancel
              </button>
              <p className="text-center">we respect your privacy</p>
            </div>
          </div>
        </FadeInOut>
      )}

      {/* SENDING PROGRESS CARD */}
      {/* {isClicked && (
        <div className="flex flex-col items-center  w-full h-full bg-red-600 py-16 text-neutral-100">
          <h2 className="julius-sans-one-regular text-2xl animate-pulse p-2 m-16">
            Sending message...
          </h2>
        </div>
      )} */}

      {isSuccess && (
        <FadeInOut>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center border border-secondary   rounded-2xl overflow-hidden m-4  ">
              <h2 className="text-3xl md:text-4xl backdrop-blur-sm bg-white/30 w-full text-center p-2 text-neutral-100 text-outline py-4 px-6">
                {result}
              </h2>
            </div>
          </div>
        </FadeInOut>
      )}
    </div>
  );
};

export default Contact;
