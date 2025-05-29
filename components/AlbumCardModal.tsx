"use client";
import { useState, useEffect, useRef } from "react";
import SanityImage from "@/components/SanityImage";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
export default function AlbumCardModal({
  image,
  alt,
  children,
}: {
  children: React.ReactNode;
  image: string;
  alt: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      contentRef.current &&
      !contentRef.current?.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  const handleEscKey = (event: KeyboardEvent) => {
    if (event.key == "Escape") setIsOpen(false);
  };

  // Combined approach for both overflow and Lenis
  useEffect(() => {
    if (isOpen) {
      // Stop scrolling using both methods
      document.body.style.overflow = "hidden";
      // Force touch-action none on body for mobile
      document.body.style.touchAction = "none";

      document.addEventListener("keyup", handleEscKey);
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Re-enable scrolling using both methods
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      // Always clean up properly
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.removeEventListener("keyup", handleEscKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button className={` max-w-2xl`} onClick={() => setIsOpen(true)}>
        <FadeIn random={true} y={false}>
        <div className="w-full max-w-lg border-4 border-background outline overflow-hidden hover:border-accent transition-all duration-200 ease-in-out">
          <SanityImage image={image} alt={alt} />
        </div>
        </FadeIn>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-lenis-stop="true"
            data-lenis-prevent="true"
            id="modal"
            layout
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div
              id="modalInner"
              ref={contentRef}
              className={` flex h-[82vh] w-[95vw] flex-col items-center gap-y-6 rounded bg-white p-4 shadow-lg sm:h-[96vh] sm:w-[90vw] max-w-3xl`}
            >
              <button
                className="absolute top-4 right-4 z-40 m-0 hidden rounded-full bg-neutral-800 p-0 text-white sm:block"
                onClick={() => setIsOpen(false)}
              >
                <IoIosCloseCircleOutline size={"2.3rem"} />
              </button>
              <div className="relative h-full w-full overflow-x-scroll md:p-4 ">
                {children}
              </div>
              <button className="close-button" onClick={() => setIsOpen(false)}>
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
