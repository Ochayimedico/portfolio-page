"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Logo from "../public/logo.png";
import myPic from "../public/me.jpg";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex flex-col items-center relative">
      <motion.nav
        onViewportLeave={() => setShowMenu(true)}
        onViewportEnter={() => setShowMenu(false)}
        className="relative flex flex-col items-center pt-4 pb-3 w-full z-20 border-transparent border-b-[#3f2728] border-2 fixed top-0 bg-[#E7D4B1] overflow-x-hidden"
      >
        <div className="w-20 h-20 rounded-full absolute -left-12 bg-[#3f2728]"></div>
        <div className="w-20 h-20 rounded-full absolute -right-12 bg-[#3f2728]"></div>
        <h1 className="text-[#3F2728] text-center text-[2.5rem] font-bold pb-4">
          Ochayi Peter
        </h1>
        <ul className="flex flex-row font-semibold">
          <li className="mx-2 cursor-pointer">Home</li>
          <li className="mx-2 cursor-pointer">About</li>
          <li className="mx-2 cursor-pointer">Projects</li>
          <li className="mx-2 cursor-pointer">Skills</li>
          <li className="mx-2 cursor-pointer">Contact</li>
        </ul>
      </motion.nav>
      {showMenu && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full flex flex-row justify-end fixed top-10 z-20 px-10"
        >
          {/* <Image width={50} height={50} src={Logo} alt="logo"></Image> */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className=" bg-white rounded-full w-[50px] h-[50px] items-center flex justify-center"
          >
            <svg
              width="45px"
              height="45px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g id="Menu / Menu_Alt_05">
                  <path
                    id="Vector"
                    d="M5 17H13M5 12H19M11 7H19"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </g>
            </svg>
          </motion.div>
        </motion.nav>
      )}
      {/* hero section */}
      <section className="flex w-full h-dvh flex-col items-center justify-center text-[2rem] m-2">
        <p className="absolute uppercase -rotate-90 -left-25 text-sm top-100 tracking-[0.3rem]">
          ochayi peter ago
        </p>
        <div className=" ">
          <h2 className="text-center md:text-[4rem] text-[3rem] lg:text-[5rem] font-bold">
            Hello, I'm Ochayi
          </h2>
          <h3 className="text-center md:text-[2.5rem] text-[2rem] lg:text-[3rem] text-[#1B1508] ">
            Frontend Developer
          </h3>
          <h3 className="text-center md:text-[2.5rem] text-[2rem] lg:text-[3rem] text-[#1B1508] ">
            Website Designer
          </h3>
          <p className="text-sm text-center justify-end lg:mt-34 mt-40  text-[#9C7630]">
            scroll down pls
          </p>
        </div>

        {/* <a
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4"
          href="http://airdrops.ochayimedico.xyz"
        >
          Airdrops App
        </a>
        <a e7d4b1
          target="_blank"
          rel="noopener noreferrer"
          className=""
          href="http://todosandtasks.ochayimedico.xyz"
        >
          Todo and Task App
        </a> */}
      </section>
      {/* about me  */}
      <motion.section
        initial={{
          borderRadius: "0",
        }}
        whileInView={{
          borderRadius: "60%/ 10% 10% 0 0",
        }}
        transition={{
          delay: 0.1,
          duration: 1.5,
          type: "spring",
          stiffness: 80,
          damping: 10,
          bounce: 0.6,
          ease: "easeInOut",
        }}
        className="bg-[#3f2728] w-full relative"
      >
        <motion.div
          className="mt-2 p-8 text-white text-center md:text-[1.85rem] lg:text-[2.25rem] text-[1.35rem] w-[90%] md:w-[70%] lg:w-[60%] mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.8,
                delayChildren: 1,
              },
            },
          }}
        >
          <motion.div
            className="w-max relative mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.8,
                  delayChildren: 0,
                },
              },
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                    ease: "easeInOut",
                  },
                },
              }}
              className="text-[#ffffff] text-center md:text-[2rem] lg:text-[2.5rem] text-[1.5rem] my-6 transition-all w-max mx-auto"
            >
              About Me
            </motion.h2>

            {/* line */}
            <motion.div
              className="bg-[#ffffff] absolute lg:bottom-2 bottom-0 md:bottom-1 h-1"
              variants={{
                hidden: { opacity: 0, width: "0%" },
                visible: {
                  width: "100%",
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                    ease: "easeInOut",
                  },
                },
              }}
            />
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  ease: "easeInOut",
                },
              },
            }}
          >
            I'm a frontend developer and website designer dedicated to building
            websites that not only look great but actually work great.
          </motion.p>
          <br />
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  ease: "easeInOut",
                },
              },
            }}
          >
            My goal is to turn creative ideas into smooth, impactful experiences
            for users by making the UI beautiful and interactive and the UX
            perfect.
          </motion.p>
        </motion.div>
      </motion.section>
      {/* picture section*/}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              duration: 0.5,
              staggerChildren: 0.8,
              delayChildren: 0,
            },
          },
        }}
        className="bg-[#E7D4B1] w-full p-8  h-max"
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 2,
                delay: 1,
                type: "spring",
                stiffness: 100,
                damping: 12,
                ease: "easeInOut",
              },
            },
          }}
          className="mt-4  text-center font-semibold text-[#3f2728] md:text-[2rem] lg:text-[2.5rem] text-[1.5rem]"
        >
          The Face Behind The Code ↴
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0, borderRadius: "60%/ 0 0 5% 5%" },
            visible: {
              borderRadius: "0%",

              opacity: 1,
              scale: 1,
              transition: {
                duration: 3.5,
                delay: 1,
                type: "spring",
                stiffness: 100,
                damping: 12,
                ease: "easeInOut",
              },
            },
          }}
          className="mx-auto w-max bg-[#e7d4b1] my-6 "
        >
          <Image
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 3.5,
                  delay: 1,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  ease: "easeInOut",
                },
              },
            }}
            className="mx-auto rounded-2xl w-[440px] lg:w-[700px]"
            src={myPic}
            // width={500}
            // height={500}
            alt="my picture"
          ></Image>
        </motion.div>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 2,
                delay: 1.75,
                type: "spring",
                stiffness: 100,
                damping: 12,
                ease: "easeInOut",
              },
            },
          }}
          className="px-1 mt-4 mb-4 text-black md:text-[2rem] lg:text-[2.5rem] text-[1.5rem]"
        >
          Ochayi is a pharmacist and graphics designer who fell in love with
          website design and frontend development.
          <br />
          For me, the ultimate goal is user satisfaction after using an app
          created by me.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 2,
                delay: 1.95,
                type: "spring",
                stiffness: 100,
                damping: 12,
                ease: "easeInOut",
              },
            },
          }}
          className="flex lg:flex-row md:flex-row flex-col justify-between my-8"
        >
          <div className="lg:w-[40%] md:w-[40%] mb-2 w-full flex flex-col text-black">
            <div className=" h-0.5 bg-[#3f2728] w-full mb-4"> </div>
            <p className="uppercase text-[0.85rem]">years of experience</p>
            <p className="uppercase font-bold text-[4rem]">2+</p>
          </div>
          <div className="lg:w-[40%] md:w-[40%]  w-full flex flex-col text-black">
            <div className=" h-0.5 bg-[#3f2728] w-full mb-4"> </div>
            <p className="uppercase text-[0.85rem]">
              number of projects completed
            </p>
            <p className="uppercase font-bold text-[4rem]">over 10</p>
          </div>
        </motion.div>
      </motion.section>

      {/* my projects */}
      <motion.section
        initial={{}}
        whileInView={{}}
        transition={{
          delay: 0.1,
          duration: 1.5,
          type: "spring",
          stiffness: 80,
          damping: 10,
          bounce: 0.6,
          ease: "easeInOut",
        }}
        className="bg-[#3f2728] w-full relative"
      >
        <motion.div
          className="mt-2 p-8 text-white text-center md:text-[1.85rem] lg:text-[2.25rem] text-[1.35rem] w-[90%] md:w-[70%] lg:w-[60%] mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.8,
                delayChildren: 1,
              },
            },
          }}
        >
          <motion.div
            className="w-max relative mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.8,
                  delayChildren: 0,
                },
              },
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                    ease: "easeInOut",
                  },
                },
              }}
              className="text-[#ffffff] text-center md:text-[2rem] lg:text-[2.5rem] text-[1.5rem] my-6 transition-all w-max mx-auto"
            >
              My Projects
            </motion.h2>

            {/* line */}
            <motion.div
              className="bg-[#ffffff] absolute lg:bottom-2 bottom-0 md:bottom-1 h-1"
              variants={{
                hidden: { opacity: 0, width: "0%" },
                visible: {
                  width: "100%",
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                    ease: "easeInOut",
                  },
                },
              }}
            />
          </motion.div>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  ease: "easeInOut",
                },
              },
            }}
          >
            These are the top projects I have worked on in the past months
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  ease: "easeInOut",
                },
              },
            }}
            className="mt-8 text-left"
          >
            <motion.h2 className="text-[2.5rem]  font-bold text-[#e7d4b1]">
              Airdrops App
            </motion.h2>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
