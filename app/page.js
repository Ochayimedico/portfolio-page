"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import myPic from "../public/me.jpg";
import whatsapp from "../public/social_media/whatsapp.png";
import discord from "../public/social_media/discord.png";
import linkedin from "../public/social_media/linkedin.png";
import telegram from "../public/social_media/telegram.png";
import twitter from "../public/social_media/twitter.png";

//animation variants
const fadeInUp = {
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
};

const fadeInUpFast = {
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
};
const fadeInLeftFast = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 100,
      damping: 12,
      ease: "easeInOut",
    },
  },
};
const fadeInRightFast = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 100,
      damping: 12,
      ease: "easeInOut",
    },
  },
};

const lineExpand = {
  hidden: { opacity: 0, width: "0%" },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      damping: 12,
      ease: "easeInOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.8,
      delayChildren: 1,
    },
  },
};

const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.8,
      delayChildren: 0,
    },
  },
};

const springTransition = {
  delay: 0.1,
  duration: 1.5,
  type: "spring",
  stiffness: 80,
  damping: 10,
  bounce: 0.6,
  ease: "easeInOut",
};

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const projects = [
    {
      title: "Airdrops App",
      year: "2025",
      description:
        "Allows users to create their own airdrops dashboard where they can add, edit and delete airdrop projects. It uses Supabase as Backend-as-a-Service (BAAS).",
      link: "http://airdrops.ochayimedico.xyz",
      alignSelf: "start",
    },
    {
      title: "Todos and Tasks App",
      year: "2024",
      description:
        "Allows users to create their own todos and tasks and users can add, edit and delete tasks or todos. It uses Supabase as Backend-as-a-Service (BAAS).",
      link: "http://todosandtasks.ochayimedico.xyz",
      alignSelf: "end",
    },
  ];

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
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-full w-[50px] h-[50px] items-center flex justify-center"
          >
            <svg
              width="45px"
              height="45px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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

      {/* Hero Section */}
      <section className="flex w-full h-dvh flex-col items-center justify-center text-[2rem] m-2">
        <p className="absolute uppercase -rotate-90 -left-25 text-sm top-100 tracking-[0.3rem]">
          ochayi peter ago
        </p>
        <div>
          <h2 className="text-center md:text-[4rem] text-[3rem] lg:text-[5rem] font-bold">
            Hello, I'm Ochayi
          </h2>
          <h3 className="text-center md:text-[2.5rem] text-[2rem] lg:text-[3rem] text-[#1B1508]">
            Frontend Developer
          </h3>
          <h3 className="text-center md:text-[2.5rem] text-[2rem] lg:text-[3rem] text-[#1B1508]">
            Website Designer
          </h3>
          <p className="text-sm text-center justify-end lg:mt-34 mt-40 text-[#9C7630]">
            scroll down pls
          </p>
        </div>
      </section>

      {/* About Me */}
      <motion.section
        initial={{ borderRadius: "0" }}
        whileInView={{ borderRadius: "60%/ 10% 10% 0 0" }}
        transition={springTransition}
        className="bg-[#3f2728] w-full relative"
      >
        <motion.div
          className="mt-2 p-8 text-white text-center md:text-[1.85rem] lg:text-[2.25rem] text-[1.35rem] w-[90%] md:w-[70%] lg:w-[60%] mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          <motion.div
            className="w-max relative mx-auto"
            variants={staggerContainerFast}
          >
            <motion.h2
              variants={fadeInUpFast}
              className="text-[#e7d4b1] text-center md:text-[2.25rem] lg:text-[2.5rem] text-[2rem] my-6 transition-all w-max mx-auto font-bold"
            >
              About Me
            </motion.h2>
            <motion.div
              className="bg-[#e7d4b1] absolute lg:bottom-2 bottom-0 md:bottom-1 h-1"
              variants={lineExpand}
            />
          </motion.div>

          <motion.p variants={fadeInUp}>
            I'm a frontend developer and website designer dedicated to building
            websites that not only look great but actually work great.
          </motion.p>
          <br />
          <motion.p variants={fadeInUp}>
            My goal is to turn creative ideas into smooth, impactful experiences
            for users by making the UI beautiful and interactive and the UX
            perfect.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Picture Section */}
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
        className="bg-[#E7D4B1] w-full p-8"
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
              },
            },
          }}
          className="mt-4 text-center font-semibold text-[#3f2728] md:text-[2rem] lg:text-[2.5rem] text-[1.5rem]"
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
              },
            },
          }}
          className="mx-auto w-max bg-[#e7d4b1] my-6"
        >
          <Image
            className="mx-auto rounded-2xl w-[440px] lg:w-[700px]"
            src={myPic}
            alt="my picture"
          />
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
              },
            },
          }}
          className="flex lg:flex-row md:flex-row flex-col justify-between my-8"
        >
          <div className="lg:w-[40%] md:w-[40%] mb-2 w-full flex flex-col text-black">
            <div className="h-0.5 bg-[#3f2728] w-full mb-4"></div>
            <p className="uppercase text-[0.85rem]">years of experience</p>
            <p className="uppercase font-bold text-[4rem] text-[#3f2728]">2+</p>
          </div>
          <div className="lg:w-[40%] md:w-[40%] w-full flex flex-col text-black">
            <div className="h-0.5 bg-[#3f2728] w-full mb-4"></div>
            <p className="uppercase text-[0.85rem]">
              number of projects completed
            </p>
            <p className="uppercase font-bold text-[4rem] text-[#3f2728]">
              over 10
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* my projects */}
      <motion.section
        initial={{}}
        whileInView={{}}
        transition={springTransition}
        className="bg-[#3f2728] w-full relative flex flex-col"
      >
        <motion.div
          className="mt-2 p-8 text-white text-center md:text-[1.85rem] lg:text-[2.25rem] text-[1.35rem] w-[90%] md:w-[70%] lg:w-[70%] mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          <motion.div
            className="w-max relative mx-auto"
            variants={staggerContainerFast}
          >
            <motion.h2
              variants={fadeInUpFast}
              className="text-[#e7d4b1] text-center md:text-[2rem] lg:text-[2.5rem] text-[1.5rem] my-6 transition-all w-max mx-auto font-bold"
            >
              My Projects
            </motion.h2>
            <motion.div
              className="bg-[#e7d4b1] absolute lg:bottom-2 bottom-0 md:bottom-1 h-1"
              variants={lineExpand}
            />
          </motion.div>

          <motion.p variants={fadeInUpFast}>
            These are the top projects I have worked on in the past.
          </motion.p>

          {/* projects list */}
          <motion.div className="grid w-full">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={index % 2 === 0 ? fadeInLeftFast : fadeInRightFast}
                className={`${
                  index > 0 ? "mt-16" : "mt-8"
                } text-left lg:w-[50%]  flex flex-col border-2 border-[#e7d4b1] pl-4 border-r-transparent border-t-transparent rounded-4 ${
                  project.alignSelf === "end" ? "justify-self-end" : ""
                }`}
              >
                <h2 className="text-[2.5rem] leading-[1.2em] mb-2 font-bold text-[#e7d4b1]">
                  {project.title}
                </h2>
                <p className="lg:text-[1rem] text-[0.85rem] text-[#e7d4b1] w-max">
                  Created in {project.year}
                </p>
                <p className="lg:text-[1.25rem] text-[1rem] mt-4">
                  {project.description}
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-right mr-4 hover:text-[#F9F4EB] text-[#e7d4b1] lg:text-[1rem]  text-[0.85rem] mt-6 mb-2 self-end w-max"
                  href={project.link}
                >
                  click to enter<span className="ml-2">→</span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* my skills */}
      <motion.section
        initial={{}}
        whileInView={{}}
        transition={springTransition}
        className="bg-[#e7d4b1] w-full relative flex flex-col"
      >
        <motion.div
          className="mt-2 p-8 text-white text-center md:text-[1.85rem] lg:text-[2.25rem] text-[1.35rem] w-[90%] md:w-[70%] lg:w-[70%] mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          <motion.div
            className="w-max relative mx-auto"
            variants={staggerContainerFast}
          >
            <motion.h2
              variants={fadeInUpFast}
              className="text-[#3f2728] text-center md:text-[2rem] lg:text-[2.5rem] text-[1.5rem] my-6 transition-all w-max mx-auto font-bold"
            >
              My Skills
            </motion.h2>
            <motion.div
              className="bg-[#3f2728] absolute lg:bottom-2 bottom-0 md:bottom-1 h-1"
              variants={lineExpand}
            />
          </motion.div>

          <motion.p className="text-black" variants={fadeInUpFast}>
            A detailed list of the technological toolkit that I have worked with
            throughout my years of experience.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid md:gap-2 lg:gap-2 lg:grid-cols-2 text-left mt-12 lg:text-[1.35rem] text-[1.15rem] "
          >
            <motion.div className=" my-4">
              <p className="text-black font-semibold ">
                Languages & Frameworks
              </p>
              <div className="lg:text-[1.15rem] text-[1rem] text-black">
                <button className="rounded-4xl my-2 border-2 border-[#3f2728] border-solid  p-2 px-3  mr-3 hover:bg-[#3f2728] hover:text-white">
                  Javascript
                </button>
                <button className="rounded-4xl border-2 border-[#3f2728] border-solid  p-2  px-3 my-2 mr-3 hover:bg-[#3f2728] hover:text-white">
                  React
                </button>
                <button className="rounded-4xl border-2 border-[#3f2728] border-solid  p-2 my-2 px-3  mr-3 hover:bg-[#3f2728] hover:text-white">
                  Next.Js
                </button>
                <button className="rounded-4xl border-2 border-[#3f2728] border-solid  p-2 my-2 px-3  mr-3 hover:bg-[#3f2728] hover:text-white">
                  Node.Js
                </button>
              </div>
            </motion.div>
            <motion.div className="my-4">
              <p className="text-black font-semibold ">UI & Styling</p>
              <div className="lg:text-[1.15rem] text-[1rem] text-black">
                <button className="rounded-4xl my-2 border-2 border-[#3f2728] border-solid  p-2 px-3  mr-3 hover:bg-[#3f2728] hover:text-white">
                  Tailwindcss
                </button>
                <button className="rounded-4xl border-2 border-[#3f2728] border-solid  p-2  px-3 my-2 mr-3 hover:bg-[#3f2728] hover:text-white">
                  Framer motion
                </button>
                <button className="rounded-4xl border-2 border-[#3f2728] border-solid  p-2 my-2 px-3  mr-3 hover:bg-[#3f2728] hover:text-white">
                  Figma
                </button>
              </div>
            </motion.div>
            <motion.div className="my-4">
              <p className="text-black font-semibold ">Databases & BAAS</p>
              <div className="lg:text-[1.15rem] text-[1rem] text-black">
                <button className="rounded-4xl my-2 border-2 border-[#3f2728] border-solid  p-2 px-3  mr-3 hover:bg-[#3f2728] hover:text-white">
                  MongoDB
                </button>
                <button className="rounded-4xl border-2 border-[#3f2728] border-solid  p-2  px-3 my-2 mr-3 hover:bg-[#3f2728] hover:text-white">
                  PostgresSQL
                </button>
                <button className="rounded-4xl border-2 border-[#3f2728] border-solid  p-2 my-2 px-3  mr-3 hover:bg-[#3f2728] hover:text-white">
                  Supabase
                </button>
                <button className="rounded-4xl border-2 border-[#3f2728] border-solid  p-2 my-2 px-3  mr-3 hover:bg-[#3f2728] hover:text-white">
                  Firebase
                </button>
              </div>
            </motion.div>
            <motion.div className="my-4">
              <p className="text-black font-semibold">Cloud</p>
              <div className="lg:text-[1.15rem] text-[1rem] text-black">
                <button className="rounded-4xl my-2 border-2 border-[#3f2728] border-solid  p-2 px-3  mr-3 hover:bg-[#3f2728] hover:text-white">
                  Vercel
                </button>
                <button className="rounded-4xl border-2 border-[#3f2728] border-solid  p-2  px-3 my-2 mr-3 hover:bg-[#3f2728] hover:text-white">
                  Google cloud
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
      {/* Contact Me */}
      <motion.section
        initial={{}}
        whileInView={{}}
        transition={springTransition}
        className="bg-[#3f2728] w-full relative flex flex-col items-center justify-center"
      >
        <motion.div
          className="mt-2 p-8 text-white text-center md:text-[1.85rem] lg:text-[2.25rem] text-[1.35rem] w-[90%] md:w-[70%] lg:w-[70%] mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          <motion.div
            className="w-max relative mx-auto"
            variants={staggerContainerFast}
          >
            <motion.h2
              variants={fadeInUpFast}
              className="text-[#e7d4b1] text-center md:text-[2rem] lg:text-[2.5rem] text-[1.5rem] mt-6 transition-all w-max mx-auto font-bold"
            >
              Contact Me
            </motion.h2>
            <motion.div
              className="bg-[#e7d4b1] absolute lg:bottom-2 bottom-0 md:bottom-1 h-1"
              variants={lineExpand}
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUpFast}
          className="grid lg:gap-3 grid-cols-2 lg:grid-cols-3 md:grid-cols-2 text-white text-[1.2rem] text-[1.5rem] w-[90%] lg:w-[70% ] place-items-right mx-auto"
        >
          <motion.a
            href="https://wa.link/orc2s4"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUpFast}
            className="my-2 flex flex-col items-center my-6 pointer-cursor "
          >
            <div className="bg-[#e7d4b1]  items-center flex justify-center rounded-2xl w-[60px] h-[60px] ">
              <Image
                src={whatsapp}
                width={36}
                height={36}
                alt="whatsapp logo"
              ></Image>
            </div>
            <p className="my-2">Whatsapp</p>
          </motion.a>
          <motion.a
            href="https://x.com/__medico_"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUpFast}
            className=" flex flex-col items-center my-6 pointer-cursor"
          >
            <div className="bg-[#e7d4b1] items-center flex justify-center rounded-2xl w-[60px] h-[60px] ">
              <Image
                src={twitter}
                width={36}
                height={36}
                alt="twitter logo"
              ></Image>
            </div>
            <p className="my-2">X (Twitter)</p>
          </motion.a>
          <motion.a
            href="https://discord.com/channels/942269085176201278"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUpFast}
            className=" flex flex-col items-center my-6 cursor-pointer "
          >
            <div className="bg-[#e7d4b1] items-center flex justify-center rounded-2xl w-[60px] h-[60px] ">
              <Image
                src={discord}
                width={36}
                height={36}
                alt="discord logo"
              ></Image>
            </div>

            <p className="my-2">Discord</p>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/peter-ochayi-41a6b3186/"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUpFast}
            className="my-2 flex flex-col items-center my-6  cursor-pointer "
          >
            <div className="bg-[#e7d4b1] items-center flex justify-center rounded-2xl w-[60px] h-[60px] ">
              <Image
                src={linkedin}
                width={36}
                height={36}
                alt="linkedin logo"
              ></Image>
            </div>

            <p className="my-2">LinkedIn</p>
          </motion.a>
          <motion.a
            href="https://t.me/@ochmed1"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUpFast}
            className="my-2 flex flex-col items-center my-6  cursor-pointer "
          >
            <div className="bg-[#e7d4b1] items-center flex justify-center rounded-2xl w-[60px] h-[60px] ">
              <Image
                src={telegram}
                width={36}
                height={36}
                alt="telegram logo"
              ></Image>
            </div>

            <p className="my-2">Telegram</p>
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
}
