"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#06101C] pt-36 lg:pt-44 pb-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* ORANGE GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#F5821F]/10 rounded-full blur-[140px]" />

        {/* BLUE GLOW */}
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-[#1D4F91]/20 rounded-full blur-[120px]" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1550px] mx-auto px-6 lg:px-10">
        {/* TOP BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 text-sm uppercase tracking-[3px] text-white/40"
        >
          <span>Home</span>

          <span className="text-[#F5821F]">/</span>

          <span className="text-white">About Us</span>
        </motion.div>

        {/* HERO GRID */}
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-14 items-end">
          {/* LEFT CONTENT */}
          <div>
            {/* MAIN HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className="mt-8 text-[3rem] sm:text-[4rem] lg:text-[6rem] leading-[0.92] font-black text-white"
            >
              Global Freight
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F5821F] to-[#ffb067]">
                Delivered With Confidence
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.35,
              }}
              className="mt-10 max-w-2xl text-lg lg:text-xl leading-relaxed text-white/55"
            >
              KNLS is a recognized leader in global supply chain management,
              providing dependable freight solutions through a proven
              transportation network. We deliver flexible, scalable, and
              customer-focused logistics services while maintaining the highest
              standards of operational excellence, safety, and reliability
              across every shipment.
            </motion.p>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="relative"
          >
            {/* MAIN IMAGE */}
            <div className="relative overflow-hidden rounded-[40px] h-[650px]">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop"
                alt="logistics"
                fill
                priority
                className="object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06101C]/80 via-transparent to-transparent" />
            </div>

            {/* BORDER FRAME */}
            <div className="absolute -top-6 -right-6 w-full h-full border border-white/10 rounded-[40px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;