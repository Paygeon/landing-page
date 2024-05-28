"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

interface LampDemoProps {
    description: string;
  }
  
export const LampDemo: React.FC<LampDemoProps> = ({ description }) => {
 return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <br />
        <div>
      <p className="text-lg text-white mb-4">{description}</p>
      </div>
      <br />
      <div>
      <img src="https://vashong.github.io/widgets/images/Integrations.svg" alt="Integrations SVG" />
      </div>
      </motion.h1>
    </LampContainer>
  );
}
