"use client";

import { motion } from "framer-motion";
import {
  Truck,
  Globe2,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

const statistics = [
  {
    icon: Globe2,
    number: "20+",
    title: "Years of Experience",
    description:
      "Two decades of experience delivering dependable transportation, warehousing, and supply chain solutions across diverse industries.",
  },
  {
    icon: Truck,
    number: "24/7",
    title: "Shipment Visibility",
    description:
      "Real-time tracking and proactive communication help customers stay informed throughout the shipping journey.",
  },
  {
    icon: PackageCheck,
    number: "100%",
    title: "Customized Solutions",
    description:
      "Tailored logistics strategies designed around your operational requirements, cargo needs, and business goals.",
  },
  {
    icon: ShieldCheck,
    number: "Global",
    title: "Freight Network",
    description:
      "Integrated air, ocean, ground transportation, and warehousing services supporting domestic and international supply chains.",
  },
];

export default function HomeStatistics() {
  return (
    <section className="relative overflow-hidden bg-[#071120] py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* GLOW */}
        <div className="absolute top-[-180px] left-[-100px] w-[400px] h-[400px] bg-[#1D4F91]/20 rounded-full blur-[120px]" />

        <div className="absolute bottom-[-180px] right-[-100px] w-[400px] h-[400px] bg-[#F5821F]/10 rounded-full blur-[120px]" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1450px] mx-auto px-6 lg:px-10">
        {/* TOP CONTENT */}
        <div className="max-w-4xl mx-auto text-center">
          {/* TAG */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-3 mb-8"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5821F]" />

            <span className="uppercase tracking-[3px] text-sm text-white/70">
              Company Achievements
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-black leading-[1.05] text-white"
          >
            Trusted Freight
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F5821F] to-[#ffb067]">
              Performance & Results
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="mt-8 text-lg leading-relaxed text-white/60 max-w-3xl mx-auto"
          >
            Delivering measurable logistics performance through
            reliable freight operations, global connectivity, and
            operational excellence.
          </motion.p>
        </div>

        {/* STATISTICS GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
          {statistics.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 lg:p-10"
              >
                {/* HOVER EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F5821F]/10 to-transparent" />
                </div>

                {/* ICON */}
                <div className="relative w-18 h-18 rounded-3xl bg-[#F5821F]/10 border border-[#F5821F]/20 flex items-center justify-center">
                  <Icon
                    className="text-[#F5821F]"
                    size={34}
                  />
                </div>

                {/* NUMBER */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="relative mt-10 text-4xl lg:text-5xl font-black text-white leading-none"
                >
                  {item.number}
                </motion.h3>

                {/* LINE */}
                <div className="relative w-16 h-[2px] bg-[#F5821F]/40 rounded-full mt-8 group-hover:w-24 transition-all duration-500" />

                {/* TITLE */}
                <h4 className="relative mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h4>

                {/* DESCRIPTION */}
                <p className="relative mt-5 text-white/60 leading-relaxed">
                  {item.description}
                </p>

                {/* BIG NUMBER BACKGROUND */}
                <div className="absolute -bottom-6 -right-2 text-[140px] font-black text-white/[0.03] leading-none">
                  0{index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}