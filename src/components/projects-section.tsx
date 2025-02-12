import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./slide-up"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projectsFromLastJob = [
  {
    image: "/mdl.png",
    link: "https://md-landing.vercel.app/",
  },
  {
    image: "/mdd.png",
    link: "https://md-db.vercel.app/",
  },
  {
    image: "/ev.png",
    link: "https://ev-hub.extej.com/",
  },
  {
    image: "/ex.png",
    link: "https://ex-dashboard-app.netlify.app/",
  },
  {
    image: "/yf.png",
    link: "https://yieldfarming.extej.com/",
  },
  {
    image: "/ccd.png",
    link: "https://demo-r-app.netlify.app/",
  },
  {
    image: "/st.png",
    link: "https://stak-dashboard-app.netlify.app/",
  },
]

const projects = [
  {
    name: "Type Fast",
    description:
      "This is a simulator for learning blind typing on the keyboard. It's still in development. Technologies: Next.js, shadcn/ui, i18",
    image: "/type-fast.png",
    github: "",
    link: "https://fast-type-dev.labsofbytes.com/",
  },
  {
    name: "Pizza Ordering App",
    description:
      "A comprehensive pizza ordering website built with Next.js, offering a complete shopping experience, including product filtering, cart functionality, and user profile management.Technologies: Next.js, TypeScript, TailwindCSS, Prisma + PostgreSQL, NextAuth, Zustand, Resend",
    image: "/pizza.png",
    github: "https://github.com/labsofbytes/next-pizza",
    link: "https://next-pizza-lab.vercel.app/",
  },
  {
    name: "Data Management Platform",
    description: "Built with Next.js and AWS integration, this application provides data processing, filtering, and addition feature demonstrating stability and efficiency through cloud-based solutio. Technologies: Next.js, TailwindCSS, Redux Toolkit, MUI, Node.js, Prisma, AWS (EC2, RDS, API Gateway, Amplify, S3)",
    image: "/xs.png",
    github: "https://github.com/Yurii108/next-management-dashboard",
    link: "https://main.d2vyr4gilosyz5.amplifyapp.com/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <SlideUp >
        <h1 className="my-10 text-center font-bold text-4xl">
          Some projects from my last job
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
      </SlideUp>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {projectsFromLastJob.map((project, idx) => {
          return (
            <SlideUp className={`${idx === 0 ? "col-span-2" : "col-span-1"} shadow-xl overflow-hidden rounded-xl`} delay={idx * 0.1} >
              <Link key={idx} href={project.link} target="_blank" >
                <div className={`relative w-fill h-[200px]`}>
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="md:blur-[3px] hover:blur-0 object-cover transition-all duration-300"
                  />
                </div>
              </Link>
            </SlideUp>
          )
        })}
      </div>

      <SlideUp >
        <h1 className="my-10 mt-32 text-center font-bold text-4xl">
          Own projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>

        </h1>
      </SlideUp>

      <div className="flex flex-col space-y-16">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp delay={idx * 0.1} >
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {
                        project.github && <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      }
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
