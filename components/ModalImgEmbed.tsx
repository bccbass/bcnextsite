"use client";
import { useState, useEffect, useRef } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

export default function ModalImgEmbed({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  // Disable scrolling when modal is open
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
      document.body.style.overflow = "hidden";
      document.addEventListener("keyup", handleEscKey);
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = ""; // Reset on close
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup when unmounting
      document.removeEventListener("keyup", handleEscKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="mx-auto flex h-fit w-fit max-w-xl justify-center px-2 md:px-0"
      >
        {children}
      </div>

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
            style={{ backgroundColor: "rgba(0, 0, 0, 0.96)" }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div
              ref={contentRef}
              className="flex flex-col items-center gap-y-6 p-4"
            >
              <button
                className="absolute top-4 right-4 z-40 m-0 hidden rounded-full bg-neutral-800 p-0 text-white sm:block"
                onClick={() => setIsOpen(false)}
              >
                <IoIosCloseCircleOutline size={"2.3rem"} />
              </button>
              <div className="relative max-h-[90vh] overflow-x-scroll md:max-w-[90vw] md:p-4">
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
