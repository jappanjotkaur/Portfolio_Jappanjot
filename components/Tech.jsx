"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "@/utils/motion";

const techCategories = [
  { name: "Languages", items: technologies.languages },
  { name: "Frameworks", items: technologies.frameworks },
  { name: "Libraries", items: technologies.libraries },
  { name: "Databases", items: technologies.databases },
  { name: "Tools", items: technologies.tools },
  { name: "Environments", items: technologies.environments },
];

function Tech() {
  const [activeCategory, setActiveCategory] = useState("Languages");

  return (
    <section className="w-full h-fit p-8 mt-20" id="skills">
      {/* Section Heading */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center mx-auto mb-10"
      >
        <p className="sectionSubText">What I have learnt so far</p>
        <h2 className="sectionHeadText">Core Skills</h2>
      </motion.div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {techCategories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 
              ${
                activeCategory === cat.name
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                  : "bg-bgSecondaryLight dark:bg-bgSecondaryDark text-ctnSecondaryLight dark:text-ctnSecondaryDark hover:scale-105"
              }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skill Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {techCategories
            .find((cat) => cat.name === activeCategory)
            ?.items.map((tech) => (
              <Link
                href={tech.link}
                key={tech.name}
                target="_blank"
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255,255,255,0.4)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center p-5 rounded-xl 
  bg-white/20 dark:bg-white/10 backdrop-blur-md
  shadow-md cursor-pointer"

                >
                
                  <div className="relative w-16 h-16 mb-3 transition-all duration-300 
                                  group-hover:scale-125">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      sizes="64px"
                      className="object-contain transition-all duration-300
                                group-hover:drop-shadow-[0_0_6px_silver]
                                group-hover:drop-shadow-[0_0_12px_silver]"
                    />
                  </div>

                  
                  <p className="text-sm font-medium text-center 
                    dark:text-ctnSecondaryDark text-ctnSecondaryLight">
                    {tech.name}
                  </p>
                </motion.div>
              </Link>
            ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default SectionWrapper(Tech, "tech");
