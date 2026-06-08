"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaTruckMoving,
  FaMapMarkedAlt,
  FaShieldAlt,
} from "react-icons/fa";

export default function ServiceHero() {
  return (
    <section className="relative overflow-hidden bg-[#07111D] text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        {/* IMAGE */}
        <Image
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop"
          alt="road freight"
          fill
          priority
          className="object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#07111D]/75" />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111D] via-[#07111D]/80 to-transparent" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-10 pt-36 lg:pt-44 pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-end">
          {/* LEFT SIDE */}
          <div className="max-w-5xl">
            {/* TOP LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl px-6 py-3"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5821F]" />

              <span className="uppercase tracking-[4px] text-xs text-white/70">
                Global Logistics Solutions
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.1,
              }}
              className="mt-10 text-5xl sm:text-7xl lg:text-[120px] leading-[0.88] font-black"
            >
              Every Mode,
              <span className="block pb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#F5821F] via-[#ffb067] to-[#ffe2c4]">
                Expertly Managed
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className="mt-10 text-lg lg:text-xl leading-relaxed text-white/60 max-w-2xl"
            >
              KNLS delivers integrated logistics and supply chain solutions
              across air, ocean, ground transportation, warehousing, reefer
              logistics, and last-mile distribution. Backed by over 8 years of
              industry experience, we help businesses move cargo efficiently,
              securely, and reliably across global markets.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              className="flex flex-wrap items-center gap-5 mt-14"
            >
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="group rounded-full bg-[#F5821F]"
              >
                <Link
                  href="/contact"
                  className="flex items-center gap-5 px-8 py-5"
                >
                  <span className="text-lg font-semibold">
                    Request Freight Quote
                  </span>

                  <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
                    <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="relative"
          >
            {/* MAIN PANEL */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-8 lg:p-10">
              {/* TOP */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="mt-4 text-3xl font-black leading-tight">
                    End-To-End Logistics Solutions
                  </h3>
                </div>

                <div className="w-20 h-20 rounded-3xl bg-[#F5821F]/10 border border-[#F5821F]/20 flex items-center justify-center text-[#F5821F] text-3xl">
                  <FaTruckMoving />
                </div>
              </div>

              {/* LINE */}
              <div className="w-full h-px bg-white/10 my-8" />

              {/* FEATURES */}
              <div className="space-y-5">
                {[
                  {
                    icon: <FaMapMarkedAlt />,
                    title: "Global Freight Network",
                  },
                  {
                    icon: <FaShieldAlt />,
                    title: "Specialized Freight Solutions",
                  },
                  {
                    icon: <FaTruckMoving />,
                    title: "Warehousing & Distribution",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center justify-between rounded-[24px] border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:bg-[#F5821F]"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-[#F5821F]/10 border border-[#F5821F]/20 flex items-center justify-center text-[#F5821F] text-xl group-hover:bg-white/15 group-hover:text-white group-hover:border-white/20 transition-all duration-300">
                        {item.icon}
                      </div>

                      <h4 className="text-lg font-semibold">
                        {item.title}
                      </h4>
                    </div>

                    <FaArrowRight className="text-white/30 group-hover:text-white transition-all duration-300" />
                  </div>
                ))}
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-5 mt-8">
                {[
                  {
                    number: "8+",
                    label: "Years Of Experience",
                  },
                  {
                    number: "24/7",
                    label: "Logistics Support",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
                  >
                    <h3 className="text-4xl font-black">
                      {item.number}
                    </h3>

                    <p className="mt-3 text-white/50 text-sm">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* OUTER BORDER */}
            <div className="absolute -bottom-5 -right-5 w-full h-full rounded-[40px] border border-white/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}