"use client";
import React, { useContext, useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { skills } from "@/app/data";
import { activeContext } from "@/context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";
import { animate, motion } from "framer-motion";

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index : number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    }
  }),
}

export default function Skills() {
  const Context = useContext(activeContext);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      Context?.setActiveSection("Skills");
    }
  }, [inView, Context?.setActiveSection]);

  return (
    <section ref={ref} id="skills" className="scroll-mt-28 text-center my-16">
      <SectionHeading>My Skills</SectionHeading>
      <ul className="max-w-[42rem] flex flex-wrap gap-2 justify-center text-gray-800 text-lg">
        {skills.map((skill, index) => (
          <motion.li
          key={index}
          className="bg-white items-center px-5 py-3  border-[1px] border-black/[0.1] rounded-xl"
          variants={fadeInAnimation}
          initial="initial"
          whileInView='animate'
          viewport={{
            once: true,
          }}
          custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
