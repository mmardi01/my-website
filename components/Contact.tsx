"use client";
import React, { useContext, useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { activeContext } from "@/context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendEmail } from "@/actions/sendEmail";

export type FormData = {
  emailSender: string;
  message: string;
};

export default function Contact() {
  const Context = useContext(activeContext);
  const [sending, setSending] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    emailSender: "",
    message: "",
  });

  const Errornotify = (err: string) => {
    toast.error(err , {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const notify = () => {
    toast.success("Email sent successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      Context?.setActiveSection("Contact");
    }
  }, [inView, Context?.setActiveSection]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setSending(true);
      await sendEmail(formData);
      setFormData({
        emailSender: "",
        message: "",
      });
      notify();
      setSending(false);
    } catch (err : any) {
      setSending(false);
      Errornotify(err?.message);
    }
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
      <ToastContainer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <SectionHeading>Contact Me</SectionHeading>
      <p>
        Please contact me directly at{" "}
        <a className="underline" href="mailto:sstof818@gmail.com">
          sstof818@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col mt-10 ">
        <input
          type="email"
          maxLength={500}
          required
          placeholder="Your Email"
          value={formData.emailSender}
          onChange={(e) =>
            setFormData({ ...formData, emailSender: e.target.value })
          }
          className="h-14 rounded-lg px-4 border border-black/10 placeholder:Your Email"
        />
        <textarea
          className="h-52 my-3 p-4 rounded-lg border border-black/10"
          placeholder="Your message"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          name="message"
          value={formData.message}
        />
        {!sending ? (
          <button
            type="submit"
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
        ) : (
          <button
            disabled
            className="group hover:cursor-not-allowed flex items-center justify-center 
        w-[8rem] h-[3rem] rounded-full bg-gray-900
        text-white gap-2 hover:scale-105 focus:scale-100
        transition-all hover:bg-slate-950"
          >
            <svg
              aria-hidden="true"
              role="status"
              className="w-5 h-5 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Sending...
          </button>
        )}
      </form>
    </motion.section>
  );
}
