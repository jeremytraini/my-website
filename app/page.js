"use client";

import { siteConfig } from "@/config/site";
import projects from "../data/projects.yaml";
import { Link } from "@nextui-org/link";
import { fontGabarito } from "@/config/fonts";
import clsx from "clsx";
import { TypeAnimation } from 'react-type-animation';
import { Navbar } from "@/components/Navbar";
import { MdEmail } from "react-icons/md";
import Image from 'next/image';

import {
	GithubIcon,
	LinkedinIcon
} from "@/components/Icons";

import { Button } from "@nextui-org/react";

import ProjectCarousel from "@/components/ProjectCarousel";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
  <>
    <section className="flex flex-col justify-evenly pb-32 h-screen max-h-[900px] min-h-[790px]">
      <div className="flex flex-col justify-center items-center pt-2 md:pt-4 text-center min-h-min">
        <div>
          <TypeAnimation
            sequence={[
              siteConfig.name,
            ]}
            speed={30}
            wrapper="div"
            cursor={false}
            className={clsx(
              "text-white text-6xl sm:text-7xl lg:text-8xl",
              fontGabarito.className
            )}
            style={{ paddingBottom: '3rem' }}
          />
        </div>
        <div
          className="text-lg sm:text-xl px-16 sm:px-20 text-left sm:text-center text-white pb-8"
        >
          <p className="pb-2">Trust me, I&rsquo;m not a robot… but I speak their language.</p>
          <p className="">Pursuing Software Engineering & Commerce at UNSW.</p>
          <p className="">Always up for a challenge.</p>
        </div>
        <div className="flex justify-center items-center gap-6 pb-10">
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon size={32} className="text-white" />
          </Link>
          <Link isExternal href={siteConfig.links.linkedin} aria-label="Linkedin">
            <LinkedinIcon size={32} className="text-white" />
          </Link>
          <Button
            radius="full"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
            onPress={() => window.open(`mailto:${siteConfig.email}?subject=Hello Jeremy!`)}
            endContent={<MdEmail size={18} />}
          >
            Email me
          </Button>
        </div>
      </div>
      <div className="pb-10">
        <ProjectCarousel projects={projects} />
      </div>
      <Navbar />
    </section>
    <section id="timeline" className="w-full p-12 sm:p-16 bg-gray-100 rounded-t-[4em] mt-[-4em] pb-24">
			<div className="mx-auto max-w-7xl">
				<h1
          className={clsx(
            "text-4xl md:text-5xl",
            "text-default-900 pb-10"
          )}
        >
          Timeline
        </h1>
        <div
          className="pb-6 h-full flex flex-row justify-center items-center"
        >
          <Timeline />
        </div>
			</div>
		</section>
    <section id="work" className="w-full p-12 sm:p-16 bg-white rounded-t-[4em] mt-[-4em] pb-[4em] min-h-screen">
			<div className="mx-auto max-w-7xl pb-8 sm:pb-12">
        <h1
          className={clsx(
            "text-4xl md:text-5xl",
            "text-default-900 pb-10"
          )}
        >
          What I&apos;m working on
        </h1>
        <Projects projects={projects} />
			</div>
		</section>
    <section id="contact" className="w-full p-12 sm:p-16 bg-gray-100 rounded-t-[4em] mt-[-4em]">
			<div className="mx-auto max-w-7xl pb-20 sm:pb-24">
        <div className="flex flex-row justify-end items-end w-full pb-10">
          <h1
            className={clsx(
              "invisible sm:visible text-xl md:text-2xl pb-[1.1px] md:pb-[1px]",
              "text-default-900"
            )}
          >
            Contact me on
          </h1>
          <div
            className="invisible sm:visible relative w-[160px] h-[43.43px] ml-3"
          >
            <Image src="/images/linkedin_full.png" fill />
          </div>
        </div>
        <ProfileCard />
			</div>
		</section>
  </>
  )
}
