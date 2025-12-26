"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Menu({ isOpen, closeMenuHandler }) {
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const menuVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      transformOrigin: "top right",
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: "easeInOut",
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
  };

  const listContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const listItemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    exit: {
      opacity: 0,
      x: 50,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={closeMenuHandler}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        >
          <div className="flex justify-end w-full">
            <motion.menu
              key="menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="bg-[#3f2728] mr-10 mt-10 w-[400px] h-[550px] rounded-4xl overflow-hidden"
            >
              <div className="flex justify-end p-4 cursor-pointer">
                <svg
                  onClick={closeMenuHandler}
                  width="56px"
                  height="56px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#3f2728"
                >
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z"
                      fill="#ffffff"
                    ></path>
                  </g>
                </svg>
              </div>

              <motion.ul
                variants={listContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="px-12 my-8 text-white font-bold text-[1.85rem] flex flex-col"
              >
                {["Home", "About", "Projects", "Skills", "Contact"].map(
                  (item) => (
                    <motion.li
                      key={item}
                      variants={listItemVariants}
                      whileHover={{ scale: 1.05, x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={closeMenuHandler}
                      className="my-3 w-max cursor-pointer relative"
                    >
                      <Link href={`#${item.toLowerCase()}`}>{item}</Link>
                    </motion.li>
                  )
                )}
              </motion.ul>
            </motion.menu>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
