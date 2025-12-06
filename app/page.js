import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <nav className="relative flex flex-col items-center pt-4 pb-3 w-full z-20 border-transparent border-b-[#3f2728] border-2 fixed top-0 bg-[#E7D4B1]">
        <div className="w-20 h-20 rounded-full absolute -left-12 bg-[#3f2728]"></div>
        <div className="w-20 h-20 rounded-full absolute -right-12 bg-[#3f2728]"></div>
        <h1 className="text-[#3F2728] text-center text-[2.25rem] font-bold font-righteous  pb-4 ">
          Ochayi Peter
        </h1>
        <ul className="flex flex-row font-semibold ">
          <li className="mx-3 cursor-pointer">Home</li>
          <li className="mx-3 cursor-pointer">Projects</li>
          <li className="mx-3 cursor-pointer">Skills</li>
          <li className="mx-3 cursor-pointer">Contact</li>
        </ul>
      </nav>
      <main className="mt-4 flex w-full  flex-col mx-4 lg:mx-8 items-center justify-between text-[2rem]">
        <h2 className="text-center">Hello world, welcome to my world...</h2>
        {/* <Typewriter
          options={{
            strings: ["Hello world", "welcome to my world..."],
            autoStart: true,
            loop: true,
          }}
        /> */}
        {/* <a
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4"
          href="http://airdrops.ochayimedico.xyz"
        >
          Airdrops App
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className=""
          href="http://todosandtasks.ochayimedico.xyz"
        >
          Todo and Task App
        </a> */}
      </main>
    </div>
  );
}
