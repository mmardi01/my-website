"use client";
import { projects } from "@/app/data";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { useContext, useRef } from "react";
import { activeContext } from "@/context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";

type ProjectProps = (typeof projects)[0];
export default function Project({
  projectName,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="sm:mb-8 mb-3 last:mb-0 group"
    >
      <section
        className="bg-gray-100 rounded-lg transition hover:bg-gray-200  
        group-even:pl-8 relative  max-w-[42rem] border sm:h-[28rem]  
        overflow-hidden sm:pr-8 border-black/5"
      >
        <div className="pt-4 pb-7 h-full px-5 group-even:ml-[18rem] sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col">
          <h2 className="text-2xl font-semibold">{projectName}</h2>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project I worked on "
          width={600}
          height={600}
          quality={95}
          className="absolute 
                group-hover:-translate-x-3 
                group-hover:scale-105
                group-hover:translate-y-3 
                group-hover:-rotate-2 transition
                group-even:group-hover:rotate-2
                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                w-[30rem] group-even:right-[initial] 
                group-even:left-[-10rem] 
                top-8 right-[-10rem] 
                rounded-t-lg shadow-2xl"
        />
      </section>
    </motion.div>
  );
}
