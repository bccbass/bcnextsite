"use client";
import { useState, useEffect, useRef } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { PiGooglePlayLogoThin } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
// import { useLenis } from "@/lib/lenis";

export default function Modal({
  children,
  imgUrl,
}: {
  children: React.ReactNode;
  imgUrl: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  // const lenis = useLenis();

  // Disable scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = ""; // Reset on close
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup when unmounting
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  // Handle Esc key and click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false); // Close menu if clicked outside
      }
    };
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key == "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keyup", handleEscKey);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keyup", handleEscKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Stop Lenis while modal is open
  // useEffect(() => {
  //   if (!lenis) return;

  //   if (isOpen) {
  //     lenis.stop();
  //   } else {
  //     lenis.start();
  //   }

  //   return () => {
  //     if (lenis) lenis.start();
  //   };
  // }, [isOpen, lenis]);

  return (
    <div className="flex h-fit w-screen justify-center px-4 py-8">
      <button
        className="relative mx-auto flex aspect-video w-full max-w-2xl justify-center outline outline-neutral-500 shadow-2xl"
        onClick={() => setIsOpen(true)}
      >
        <div
          style={{
            backgroundImage: `url('http://img.youtube.com/vi/${imgUrl}/hqdefault.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="h-full w-full overflow-hidden"
        ></div>
        <div
          className="absolute rounded-lg inset-1/2 h-fit w-fit px-4 py-1 text-5xl text-white"
          style={{
            translate: "-2.5rem -2rem",
            backgroundColor: "rgba(0, 0, 0, .7)",
          }}
        >
          <PiGooglePlayLogoThin />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-lenis-stop="true"
            data-lenis-prevent="true"
            layout
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{ backgroundColor: "rgba(0, 0, 0, .97)" }}
            className="fixed inset-0 z-50 flex flex-col items-center pt-20"
          >
            <button
              className="absolute top-4 right-4 z-40 m-0 rounded-full bg-neutral-800 p-0 text-white"
              onClick={() => setIsOpen(false)}
            >
              <IoIosCloseCircleOutline size={"2.6rem"} />
            </button>
            <div
              data-lenis-stop="true"
              data-lenis-prevent="true"
              ref={contentRef}
              className="flex h-fit w-fit justify-center"
            >
              {children}
            </div>
            <button
              className=" close-button absolute right-auto bottom-8 z-50 sm:hidden"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
