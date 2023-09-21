"use client";
import React, { useContext, useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { activeContext } from "@/context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const Context = useContext(activeContext);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      Context?.setActiveSection("Contact");
    }
  }, [inView, Context?.setActiveSection]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="w-[min(100%,35rem)] my-10 text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p>
        Please contact me directly at{" "}
        <a className="underline" href="mailto:sstof818@gmail.com">
          sstof818@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="flex flex-col mt-10 " onSubmit={handleSubmit}>
        <input
          type="email"
          maxLength={500}
          required
          placeholder="Your Email"
          className="h-14 rounded-lg px-4 border border-black/10 placeholder:Your Email"
        />
        <textarea
          className="h-52 my-3 p-4 rounded-lg border border-black/10"
          placeholder="Your message"
        />
        <button
          className="group flex items-center justify-center 
                    w-[8rem] h-[3rem] rounded-full bg-gray-900
                    text-white gap-2 hover:scale-105 focus:scale-100
                    transition-all hover:bg-slate-950"
        >
          Submit{" "}
          <FaPaperPlane
            className="group-hover:translate-x-1 group-hover:-translate-y-1 
                       transition-all text-xs opacity-70"
          />
        </button>
      </form>
    </motion.section>
  );
}
