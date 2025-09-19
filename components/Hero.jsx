import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { ComputersCanvas } from "./canvas";
import { fadeIn, textVariant } from "@/utils/motion";
import { heroTexts } from "@/constants";

function Hero({ loading, isMobile }) {
  return (
    <section className="relative w-full h-[100svh] md:max-h-[800px] max-h-[600px] mx-auto flex items-center pt-20 md:pt-0">
      {/* Wrapper with two columns */}
      <div className="w-full max-w-7xl mx-auto paddingX flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left side: intro text */}
        <div className="flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-primary" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <motion.div
            variants={textVariant()}
            initial="hidden"
            whileInView={!loading && "show"}
            viewport={{ once: true, amount: 0.25 }}
          >
          <h1 className="leading-tight">
            <span className="block text-2xl sm:text-3xl md:text-4xl font-light" >
              Hi, I&apos;m
            </span>
            <span
              className="block text-4xl sm:text-6xl md:text-8xl font-extrabold text-[#eff4f3] mt-2 drop-shadow-xl"
            >
              Jappanjot Kaur
            </span>
          </h1>


            <p className="heroSubText mt-2 tracking-wide">
              <TypeAnimation
                sequence={heroTexts}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </p>
          </motion.div>
        </div>

        {/* Right side: animation */}
        <motion.div
          variants={fadeIn("up", "spring")}
          initial="hidden"
          whileInView={!loading && "show"}
          viewport={{ once: true, amount: 0.25 }}
          className="flex justify-center items-center"
        >
          <ComputersCanvas isMobile={isMobile} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 left-1/2 justify-center items-center z-20 hidden md:flex">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-[#aaa6c3] flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-[#aaa6c3] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
