"use client";
import React, { useContext, useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/app/data";
import Project from "./Project";
import { activeContext } from "@/context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const Context = useContext(activeContext);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      Context?.setActiveSection("Projects");
    }
  }, [inView, Context?.setActiveSection]);

  return (
    <section id="projects" className="scroll-mt-[8rem]">
      <SectionHeading>My Projects</SectionHeading>
      <div ref={ref}>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
