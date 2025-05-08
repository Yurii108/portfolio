"use client"

import React, { useEffect } from "react"
import { useState } from "react"
import { Link as LinkScroll } from "react-scroll/modules"

import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import lenis from "@/lib/lenis"

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


  const handleClick = (id: string) => {
    const target = document.getElementById(id)
    if (target) {
      lenis.scrollTo(target)
      setNavbar(false)
    }
  }

  return (
    <header className={`w-full mx-auto fixed top-0 z-50 bg-white dark:bg-[#0b0d12] ${isScrolled ? 'shadow dark:border-b dark:border-white/10' : 'border-none'} ${navbar ? "h-full md:h-auto" : ""}`}>
      <div className={`px-4 md:py-2.5 sm:px-20 ${navbar ? "md:bg-transparent h-full md:h-auto" : ""}`}>
        <div className="justify-between md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-2 md:py-5 md:block">
              <div></div>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none"
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
              <div className="items-center justify-center space-y-12 md:flex md:space-x-6 md:space-y-0">
                {NAV_ITEMS.map((item, idx) => {
                  return (
                    <LinkScroll
                      key={idx}
                      to={item.page}
                      className={
                        "block lg:inline-block text-center hover:bg-gray-200 text-gray-900 dark:text-white dark:hover:bg-white/5 rounded-xl "
                      }
                      activeClass="bg-gray-200 dark:bg-white/5"
                      spy={true}
                      smooth={false}
                      offset={0}
                      duration={1000}
                      onClick={() => {
                        setNavbar(!navbar)
                        handleClick(item.page)
                      }
                      }
                    >
                      <button className="w-[104px]  px-4 py-2 transition-bg duration-100 cursor-pointer">
                        {item.label}
                      </button>
                    </LinkScroll>
                  )
                })}
                {currentTheme === "dark" ? (
                  <button
                    onClick={() => setTheme("light")}
                    className="p-2 rounded-xl flex justify-center w-full"
                  >
                    <RiSunLine size={25} color="white" />
                  </button>
                ) : (
                  <button
                    onClick={() => setTheme("dark")}
                    className="p-2 rounded-xl flex justify-center w-full"
                  >
                    <RiMoonFill size={25} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
