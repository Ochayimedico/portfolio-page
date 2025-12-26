import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Menu() {
  return (
    <>
      <AnimatePresence>
        <motion.menu
          //   initial={{ x: "100vw", opacity: 0 }}
          //   animate={{ x: 0, opacity: 1 }}
          //   exit={{ x: "100vw", opacity: 0 }}
          //   transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full z-100 bg-[#3f2728] lg:w-[50%] md:w-[50%]"
        >
          <motion.ul className="px-8 my-8 text-white lg:text-[1.25rem] text-[1rem]">
            <li className="my-3 ">Home</li>
            <li className="my-3 ">
              <Link href="#about"> About</Link>{" "}
            </li>
            <li className="my-3 ">Projects</li>
            <li className="my-3 ">Skills</li>
            <li className="my-3 ">Contacts</li>
          </motion.ul>
        </motion.menu>
      </AnimatePresence>
      ;
    </>
  );
}
