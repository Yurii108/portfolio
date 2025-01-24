import React from "react"
import Image from "next/image"
import SlideUp from "./slide-up"

const skills = [
  { skill: "Next.js" },
  { skill: "React" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Redux" },
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
  { skill: "NPM/PNPM" },
  { skill: "Figma" },
  { skill: "Photoshop" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <SlideUp offset="-50px 0px -50px 0px">
        <div className="my-12 pb-12 md:pt-16 md:pb-48">
          <h1 className="text-center font-bold text-4xl">
            About Me
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </h1>

          <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
            <div className="md:w-1/2 ">
              <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                Get to know me!
              </h1>
              <p>
                Front-end developer with over 2 years of experience, including developing 11 web applications at Extej. Implemented innovative solutions to enhance product scalability and improve user experience through REST API integration.
              </p>
              <br />
              <p>
                Optimized code in three projects, resolving critical bugs and boosting performance by 20%. Developed analytical dashboards using Chart.js and HighCharts, enabling data visualization for decision-making. Delivered responsive design and animations with CSS, Animation API, and Framer Motion, creating user-friendly and visually appealing interfaces.
              </p>
              <br />
              <p>
                English (B1): document technical processes and communicate with the team. I am looking for a company where I can develop modern applications, engage users, and deliver value to the business.
              </p>
              <br />
            </div>
            <div className="text-center md:w-1/2 md:text-left">
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
              <Image
                src="/hero-image-1.png"
                alt="hero-image"
                width={325}
                height={325}
                className="hidden md:block md:relative md:-bottom-4 md:left-32 md:z-0"
              />
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  )
}

export default AboutSection
