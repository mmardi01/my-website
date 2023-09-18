"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { links } from "@/app/data";
import { clsx } from "clsx";
import { activeContext } from "@/context/ActiveSectionContext";

export default function Navbar() {
  const Context = useContext(activeContext);

  return (
    <header className="z-[999] flex justify-center  items-center w-full fixed h-[100px]">
      <motion.div
        className="sm:w-[600px]  backdrop-blur-sm font-medium bg-opacity-80 text-gray-500  flex px-10 items-center w-full h-full sm:h-[55px] sm:rounded-full bg-white shadow-lg shadow-black/10 "
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
        }}
      >
        <ul className="flex w-full justify-around flex-wrap">
          {links.map((link, index) => (
            <ul
              onClick={() => Context?.setActiveSection(link.name)}
              className={clsx("m-1 py-1   px-2 relative", {
                "text-gray-950": Context?.activeSection === link.name,
              })}
              key={index}
            >
              <Link href={link.hash}>{link.name}</Link>
              {link.name === Context?.activeSection && (
                <motion.span
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  className="bg-gray-100 absolute inset-0 rounded-full -z-10"
                ></motion.span>
              )}
            </ul>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}
