import React from "react"
import Image from "next/image"
import SlideUp from "./slide-up"
import Link from "next/link"

const skills = [
  { skill: "Next.js" },
  { skill: "React" },
  { skill: "AI api" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Redux Toolkit" },
  { skill: "Zustand" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Git" },
  { skill: "Framer Motion" },
  { skill: "React Hook Form" },
  { skill: "TanStack Query" },
  { skill: "AntD" },
  { skill: "MUI" },
  { skill: "Shadcn/ui" },
  { skill: "Chart.js" },
  { skill: "Highcharts" },
  { skill: "NPM/PNPM/BUN" },
  { skill: "Figma" },
  { skill: "Photoshop" },
  { skill: "Tailwind CSS" },
  { skill: "Node.js" },
  { skill: "Express" },
  { skill: "Supabase" },
  { skill: "Prisma" },
  { skill: "PostgreSQL" },
  { skill: "AWS (EC2, RDS, API Gateway, Amplify, S3)" },
  { skill: "Socket.io" },
  { skill: "JWT" },
  { skill: "CORS" },
  { skill: "Cookies" },
]

const AboutSection = () => {
  return (
    <section id="about">

      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <SlideUp >
          <h1 className="text-center font-bold text-4xl">
            About Me
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </h1>
        </SlideUp>


        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <SlideUp className="md:w-1/2 " delay={0.15}>
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              I’m a <strong>full-stack developer</strong> with over 2 years of experience building complete products from idea to launch using modern technologies like React, Next.js, TypeScript, and Node.js.
              I focus on creating clean, scalable, and user-friendly applications with a strong architectural foundation.
            </p>
            <br />
            <p>
              I’ve worked both independently and as part of a team — my recent project&nbsp;
              <strong>The Purpose</strong>&nbsp;
              demonstrates my experience with AI integrations, Supabase, and modern state management.
              Another project&nbsp;
              <Link href="https://fast-type.labsofbytes.com/" target="_blank">
                <span className="underline text-blue-600">Fast Type Game</span>
              </Link>&nbsp;
              highlights my skills in real-time systems and performance optimization.
              I’m passionate about continuous learning, building meaningful digital products, and delivering reliable solutions that create real value.
            </p>


          </SlideUp>

          <SlideUp className="text-center md:w-1/2 md:text-left" delay={0.3}>
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 dark:bg-transparent dark:border border-white/10 px-4 py-2 mr-2 mt-2 text-gray-700 dark:text-white/90 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <SlideUp className="text-center md:w-1/2 md:text-left" delay={0.40}>
              <Image
                src="/hero-image-1.png"
                alt="hero-image"
                width={325}
                height={325}
                className="hidden md:block md:relative md:-bottom-4 md:left-32 md:z-0"
              />
            </SlideUp>
          </SlideUp>
        </div>
      </div>

    </section>
  )
}

export default AboutSection
