import React from "react"
import Image from "next/image"
import SlideUp from "./slide-up"
import Link from "next/link"

const skills = [
  { skill: "Next.js" },
  { skill: "React" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Redux Toolkit" },
  { skill: "Zustand" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Git" },
  { skill: "Framer Motion" },
  { skill: "React Hook Form" },
  { skill: "Tailwind CSS" },
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
              I’m a <strong>full-stack developer</strong> with 2 years of front-end experience and 6 months in back-end development, building complete products from idea to launch using modern technologies like React, Next.js, TypeScript and Node.js.
            </p>
            <br />
            <p>
              I’ve worked both in teams and independently — my latest project, <Link href="https://fast-type.labsofbytes.com/" target="_blank"><span className="underline text-blue-600">Fast Type Game</span></Link> is a strong example of my end-to-end development skills. Comfortable with APIs, databases, real-time features, and performance optimization. Quick to learn, responsible, and driven to build products that create real value.
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
