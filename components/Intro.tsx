"use client";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { delay, motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { activeContext } from "@/context/ActiveSectionContext";

export default function Intro() {
  const Context = useContext(activeContext);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      Context?.setActiveSection("Home");
    }
  }, [inView, Context?.setActiveSection]);

  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[50rem] scroll-mt-[810rem] text-center sm:mb-0 mb-5"
    >
      <div className="flex justify-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.5,
          }}
        >
          <Image
            src="/personal.jpg"
            alt="Mustapha Mardi"
            width="200"
            quality="95"
            height="200"
            className="h-24 w-24 border-white border-4 shadow-xl rounded-full"
          />
          <motion.span
            className="text-4xl absolute bottom-2 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </motion.div>
      </div>
      <motion.p
        className="font-medium text-2xl mt-4 !leading-[1.5] mb-10 sm:text-4xl"
        initial={{
          opacity: 0,
          y: 200,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
      >
        <span className="font-bold">Hello, I'm Mustapha. </span>
        I'm a <span className="font-bold">Front-End developer</span> & Software
        Engineering student. I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next js)</span>.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-3 justify-center text-lg font-medium"
        initial={{
          opacity: 0,
          y: 200,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex bg-gray-900 outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition text-white rounded-full px-7 py-3 items-center gap-2 "
        >
          Contact me here
          <BsArrowRight className=" opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          download={true}
          className="group bg-white rounded-full flex py-3 px-7 items-center gap-2 outline-none  hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
        >
          Download CV
          <HiDownload className="group-hover:translate-y-1 transition" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mustapha-mardi-679044177/"
          className="bg-white text-gray-700 rounded-full flex items-center p-4  hover:scale-110 text-[1.40rem] active:scale-105 transition border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          target="_blank"
          href="https://github.com/stooof01"
          className="bg-white text-gray-700 rounded-full flex items-center p-4  text-[1.40em]  hover:scale-110 active:scale-105 transition border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
