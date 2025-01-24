import React from "react"
import {
  AiOutlineGithub,
  AiOutlineLinkedin
} from "react-icons/ai"
import { FaTelegramPlane } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="mt-24" id='footer'>
      <hr className="w-full h-px mx-auto mt-8 bg-black/10  dark:bg-white/10 border-0" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-7xl ">
        <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
          <div className="flex flex-row items-center justify-center space-x-1 text-black/40 dark:text-neutral-300">
            © {currentYear} Yurii Paraska. All rights reserved.<a href="/" className="hover:underline"></a>
          </div>
          <div className="flex flex-row items-center justify-center space-x-4 mb-1">
            <a href="https://github.com/Yurii108" rel="noreferrer" target="_blank">
              <AiOutlineGithub
                className="hover:-translate-y-1 transition-all hover:!text-gray-500 cursor-pointer text-black/40 dark:text-neutral-300"
                size={30}
              />
            </a>
            <a
              href="https://t.me/yurii_paraska"
              rel="noreferrer"
              target="_blank"
            >
              <FaTelegramPlane
                className="hover:-translate-y-1 transition-all hover:!text-blue-500 cursor-pointer text-black/40 dark:text-neutral-300"
                size={30}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/yurii-paraska/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineLinkedin
                className="hover:-translate-y-1 transition-all hover:!text-blue-500 cursor-pointer text-black/40 dark:text-neutral-300"
                size={30}
              />
            </a>
            <a
              href="mailto:yurii.paraska@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <BiLogoGmail
                className="hover:-translate-y-1 hover:!text-red-500 transition-all cursor-pointer text-black/40 dark:text-neutral-300"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
