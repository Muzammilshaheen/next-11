
"use client";
import React from "react";
import {StickyScroll} from "./ui/sticky-scroll-reveal";
import { span } from "framer-motion/client";
import { Span } from "next/dist/trace";

 const codingSchoolContent = [
   {
    title: "Muhammad Rehan",
    description:"View the profiles of people named Muhammad Rehan. Join Facebook to connect with Muhammad Rehan and others you may know. Facebook gives people the power",
    content: (
        <div className="h-full w-full bg-[linear-gradient(to-botton-right(--cyan-500),var(--emerald-500))] text-center mt-24 text-2xl italic">
           <span className="font-bold text-center text-teal-300	">Muzammil shaheen</span>  
        </div>
    ),
  },
  {
    title: "Muhammad Rehan",
    description: "View the profiles of people named Muhammad Rehan. Join Facebook to connect with Muhammad Rehan and others you may know. Facebook gives people the power",
    content: (
        <div className="h-full w-full bg-[linear-gradient(to-botton-right(--cyan-500),var(--emerald-500))] text-center mt-24 text-2xl italic">
           <span className="font-bold text-center text-teal-300	">Muzammil shaheen</span>  
        </div>
    ),
  },
  {
    title: "Muhammad Rehan",
    description: "View the profiles of people named Muhammad Rehan. Join Facebook to connect with Muhammad Rehan and others you may know. Facebook gives people the power",
    content: (
        <div className="h-full w-full bg-[linear-gradient(to-botton-right(--cyan-500),var(--emerald-500))] text-center mt-24 text-2xl italic">
           <span className="font-bold text-center text-teal-300	">Muzammil shaheen</span>  
        </div>
    ),
  },
  {
    title: "Muhammad Rehan",
    description: "View the profiles of people named Muhammad Rehan. Join Facebook to connect with Muhammad Rehan and others you may know. Facebook gives people the power",
    content: (
        <div className="h-full w-full bg-[linear-gradient(to-botton-right(--cyan-500),var(--emerald-500))] text-center mt-24 text-2xl italic">
           <span className="font-bold text-center text-teal-300	">Muzammil shaheen</span>  
        </div>
    ),
  },
  {
    title: "Muhammad Rehan",
    description: "View the profiles of people named Muhammad Rehan. Join Facebook to connect with Muhammad Rehan and others you may know. Facebook gives people the power",
    content: (
        <div className="h-full w-full bg-[linear-gradient(to-botton-right(--cyan-500),var(--emerald-500))] text-center mt-24 text-2xl italic">
           <span className="font-bold text-center text-teal-300	">Muzammil shaheen</span>  
        </div>
    ),
  },
  {
    title: "Muhammad Rehan",
    description: "View the profiles of people named Muhammad Rehan. Join Facebook to connect with Muhammad Rehan and others you may know. Facebook gives people the power",
    content: (
        <div className="h-full w-full bg-[linear-gradient(to-botton-right(--cyan-500),var(--emerald-500))] text-center mt-24 text-2xl italic">
           <span className="font-bold text-center text-teal-300	">Muzammil shaheen</span>  
        </div>
    ),
  },
 
  ];

const WhyChooseUs = () => {
  return (
    <div>
     <StickyScroll content={codingSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs