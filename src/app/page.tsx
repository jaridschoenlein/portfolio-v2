"use client"

import Image from "next/image";
import Link from "next/link";
import BgGradient from './components/BackgroundGradient';
import SocialLinks from './components/SocialLinks';
import ProojectLinks from './components/ProjectList';
import ProjectList from "./components/ProjectList";
import TimeCounter from "./components/TimeCounter";
import BlogList from "./components/BlogList";
import { motion } from "motion/react";

export default function Home() {

  


  return (
    <main className="sm:block md:grid grid-cols-6 gap-4 p-14">


      <BgGradient
        speed={2}
        scale={.75}
        color="#45443A"
        noiseIntensity={1}
        rotation={.5}
      />

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        
        className="col-span-6 md:col-span-2 row-start-1 m-2">
        <div className="size-8 bg-[#ddd8b1] rounded-full mb-8"></div>
        <p className="font-200 mb-8">Jarid Schoenlein is a design engineer working at the intersection of design and development. His passion lies in building digital products that blend function with aesthetics.</p>
        <p className="font-200 mb-8">Currently working at <Link className="" href="https://www.dickhannah.com/" target="_blank">Dick Hannah Dealerships</Link> building interfaces and an in-house design system.</p>
        <p className="font-200 mb-8">Full portfolio under development.</p>
      
      <SocialLinks />

      <TimeCounter />
      
      </motion.div>

      
    </main>
  );
}
