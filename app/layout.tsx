import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ActiveSectionContext from "@/context/ActiveSectionContext";
import ThemeSwitch from "@/components/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mustapha Mardi | Personal Portfolio",
  description: "Front-end Developer using React (Nextjs).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="!scroll-smooth" lang="en">
      <body
        className={`${inter.className}
        dark:bg-gray-950 dark:text-gray-50
        dark:text-opacity-90 dark:
      bg-gray-50 text-gray-950 `}
      >
        <ActiveSectionContext>
          <Navbar />
          <div className="bg-[#fbe2e3] -z-10 sm:w-[68rem] w-[31.52rem] rounded-full right-[11rem] top-[-6rem] blur-[10rem] h-[31.52rem] absolute dark:bg-[#946263]"></div>
          <div className="bg-[#dbd7fb] -z-10  w-[31.52rem] sm:w-[68rem] rounded-full left-[-35rem] top-[-6rem] blur-[10rem] h-[31.52rem] absolute md:left-[-33rem] dark:bg-[#676394] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
          {children}
          <ThemeSwitch />
        </ActiveSectionContext>
      </body>
    </html>
  );
}
