'use client';
// npm install react-hook-form @web3forms/react

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import useWeb3Forms from "@web3forms/react";

const Contact = () => {
  const inputClassStyle = "border border-gray-400 rounded p-1 bg-black";
  const { register, reset, handleSubmit } = useForm();

  const [isSuccess, setIsSuccess] = useState< boolean >(false);
  const [result, setResult] = useState< string | null >(null);

  const accessKey = "31670424-2432-4e48-8002-d7c5e175702e";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "PossumConnect",
      subject: "Website, Hello!",
      // ... other settings
    },
    onSuccess: () => {
      setIsSuccess(true);
      setResult("Message sent!");
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-54 bg-neutral-50 border w-full max-w-xl mb-12">
      {!isSuccess && (
        <form
          className="flex flex-col space-y-4 my-2 p-4 font-thin text-lg w-full max-w-lg "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className={inputClassStyle}
            placeholder="name"
            type="text"
            {...register("name", { required: true })}
          />
          <input
            className={inputClassStyle}
            placeholder="email"
            type="email"
            {...register("email", { required: true })}
          />
          <textarea
            className={inputClassStyle}
            placeholder="type your message"
            rows={3}
            {...register("message", { required: true })}
          ></textarea>

          <button
            className="ring-1 ring-red-300  ring-offset-2 hover:ring-red-100 self-end bg-white border-red-500 rounded px-2 border hover:bg-red-400 hover:text-white transition-colors"
            type="submit"
          >
            Send Message
          </button>
        </form>
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
        <motion.div
          animate={{
            scale: [0, 1, 1, 0.95, 1],
            borderRadius: ["100%", "0%", "0%", "0%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 1,
          }}
          className="flex flex-col items-center bg-red-500 "
        >
          <div className="flex flex-col items-center border border-neutral-50 m-4 py-10 ">
            <h2 className="text-2xl w-full text-center p-2 m-16 text-neutral-100 julius-sans-one-regular">
              {result}
            </h2>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
