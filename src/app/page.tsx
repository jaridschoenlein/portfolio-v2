"use client"

// import Image from "next/image";
import { useRef } from "react";

import Link from "next/link";
//import BgGradient from './components/BackgroundGradient';
import SocialLinks from './components/SocialLinks';
// import ProojectLinks from './components/ProjectList';
// import ProjectList from "./components/ProjectList";
import TimeCounter from "./components/TimeCounter";
// import BlogList from "./components/BlogList";
// import { motion } from "motion/react";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



gsap.registerPlugin(useGSAP);

export default function Home() {

  const container = useRef(null);

  useGSAP(() => {
    const text = new SplitType(".home-text p", {
      types: "lines",
      tagName: "div",
      lineClass: "line",
    });

    (text.lines as unknown as NodeListOf<HTMLElement>).forEach((line) => {
      const content = line.innerHTML;
      line.innerHTML = `<span>${content}</span>`;
    });

    gsap.set(".home-text p .line span", {
      y:400,
      display: "block",
    });

    gsap.to(".home-text p .line span", {
      y:0,
      duration: 1.3,
      stagger: 0.075,
      ease: "power4.out",
      delay: 0.25,
    });

    return () => {
      if (text) text.revert();
    };
  },
  {scope: container}
);


  return (
    <main className="flex flex-col justify-center items-center gap-4 p-14 max-w-[800px] mx-auto">

{/* comment out the background gradient */}

      {/* <BgGradient
        speed={2}
        scale={.75}
        color="#45443A" */}
        {/* noiseIntensity={1} */}
        {/* rotation={.5} */}
      {/* /> */}
    

      <div 

        className="flex flex-col home-text col"  ref={container}>
        <div className="size-8 bg-[#ddd8b1] rounded-full mb-8"></div>
        <p className="mb-8">Jarid Schoenlein is a design engineer working at the intersection of design and development. His passion lies in building digital products that blend function with aesthetics.</p>
        <p className="mb-8 decorate">Currently working at <Link className="" href="https://www.dickhannah.com/" target="_blank">Dick Hannah Dealerships</Link> building interfaces and an in-house design system.</p>
        <p className="mb-8">Full portfolio under development.</p>
      
      <SocialLinks />

      <TimeCounter />
      
      </div>

      
    </main>
  );
}
