"use client"

import React, { useEffect } from "react"
import { useState } from "react"
import { Link as LinkScroll } from "react-scroll/modules"

import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About me",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Contacts",
    page: "footer",
  },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbar, setNavbar] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full mx-auto px-4 py-2.5 sm:px-20 fixed top-0 z-50 ${isScrolled ? 'bg-white shadow dark:bg-stone-900 dark:border-b dark:border-stone-600' : 'border-none'}`}>
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div></div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <LinkScroll
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    <button className="hover:bg-gray-200 text-gray-900 dark:text-white dark:hover:bg-white/5 px-4 py-2 rounded-xl transition-bg duration-100 cursor-pointer">
                      {item.label}
                    </button>
                  </LinkScroll>
                )
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="white" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
