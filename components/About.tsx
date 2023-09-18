"use client";
import React, { useContext, useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { activeContext } from "@/context/ActiveSectionContext";

export default function About() {
  const Context = useContext(activeContext);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      Context?.setActiveSection("About");
    }
  }, [inView, Context?.setActiveSection]);

  return (
    <motion.section
      id="about"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.175,
      }}
      className="text-center scroll-mt-[8rem] mb-28 sm:mb-40 max-w-[45rem] leading-8"
    >
      <SectionHeading>About Me</SectionHeading>
      <p ref={ref} className="mb-3">
        I am a dedicated software engineering student enrolled at{" "}
        <span className="font-medium">1337 School</span>, which is part of the
        prestigious <span className="font-medium">42 network</span>. Throughout
        my academic journey, I have immersed myself in a plethora of challenging
        projects, some of which have spanned several months. These experiences
        have fostered my deep passion for tackling complex problems and honing
        my skills as a problem solver. I thrive on challenges, believing that
        they are opportunities for growth and innovation. As I look ahead to my
        career, I am determined to channel my enthusiasm and expertise into
        becoming a proficient front-end developer. I am excited about the
        dynamic world of web development and look forward to creating
        user-friendly and visually captivating interfaces that enhance the
        digital experience for all.
      </p>
    </motion.section>
  );
}
