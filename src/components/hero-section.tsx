"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"
import { Link as LinkScroll } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const resumeLink = process.env.NEXT_PUBLIC_RESUME || "";

const HeroSection = () => {

  return (
    <section id="home" className="h-[calc(100vh-60px)] md:h-[calc(100vh-20px)] flex flex-col ">
      <div></div>
      <div className="flex flex-1 flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-4/12">
          <Image
            src="/headshot.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-8/12">
          <h1 className="!text-4xl font-bold mt-6 md:mt-0 md:!text-5xl">
            Hi, my name is Yurii.
          </h1>
          <h2 className="!text-3xl mt-4 mb-6 md:!text-5xl font-semibold text-[#38b2ac]">
            I&#39;m a{" "}Front-end developer.
          </h2>
          <Link href={resumeLink} rel="noreferrer" target="_blank" className="block mx-auto w-[136px] md:mx-0">
            <button className="animated-button">
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
              <span className="text">Resume</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center cursor-pointer">
        <LinkScroll
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </LinkScroll>
      </div>
    </section>
  );
};

export default HeroSection;
