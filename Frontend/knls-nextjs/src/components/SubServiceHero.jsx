"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SubServiceHero = ({ icon, title, subtitle, desc, image }) => {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-16">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071120]/95 via-[#071120]/80 to-[#071120]/60" />
      </div>

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 w-full">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <span className="text-[#F5821F] text-xl">
            {icon}
          </span>

          <span className="text-white/70 text-sm tracking-[3px] uppercase">
            Logistics Division
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-5xl md:text-7xl font-black text-white leading-[1.05]"
        >
          {title}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F5821F] to-[#ffb067]">
            {subtitle}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 max-w-2xl text-lg text-white/70"
        >
          {desc}
        </motion.p>
      </div>
    </section>
  );
};

export default SubServiceHero;