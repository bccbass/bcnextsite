"use client";
import { useState, useEffect, useRef } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
// import { useLenis } from "@/lib/lenis";

export default function Modal({
  isPdf = false,
  children,
  title,
  pdfBtn = false,
}: {
  children: React.ReactNode;
  title: string;
  isPdf?: boolean;
  pdfBtn?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  // const lenis = useLenis();

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
    // if (!lenis) return;

    if (isOpen) {
      // Stop scrolling using both methods
      document.body.style.overflow = "hidden";
      // console.log('stopping lenis')
      // lenis.stop();

      // Force touch-action none on body for mobile
      document.body.style.touchAction = "none";

      document.addEventListener("keyup", handleEscKey);
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Re-enable scrolling using both methods
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      // console.log("starting lenis");

      // lenis.start();
    }

    return () => {
      // Always clean up properly
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.removeEventListener("keyup", handleEscKey);
      document.removeEventListener("mousedown", handleClickOutside);
      // if (lenis) lenis.start();
      // console.log("returning lenis -> start");
    };
  }, [isOpen]);

  return (
    <>
      <button
        className={`${pdfBtn ? "pdf-button" : "theme-button"} max-w-2xl`}
        onClick={() => setIsOpen(true)}
      >
        {title ? title : "Open"}
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
              className={`${isPdf ? "" : "max-w-lg"} flex h-[82vh] w-[95vw] flex-col items-center gap-y-6 rounded bg-white p-4 shadow-lg sm:h-[96vh] sm:w-[90vw] md:w-[80vw] lg:w-[70vw]`}
            >
              <button
                className="absolute top-4 right-4 z-40 m-0 hidden rounded-full bg-neutral-800 p-0 text-white sm:block"
                onClick={() => setIsOpen(false)}
              >
                <IoIosCloseCircleOutline size={"2.3rem"} />
              </button>
              <div className="relative h-full w-full overflow-x-scroll md:p-4">
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
