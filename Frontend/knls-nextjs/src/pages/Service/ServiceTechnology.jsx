"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaSatelliteDish,
  FaLaptopCode,
  FaTruckMoving,
  FaWarehouse,
} from "react-icons/fa";

const techData = [
  {
    title: "Live Tracking",
    icon: <FaSatelliteDish />,
    desc: "Real-time shipment visibility with advanced GPS-enabled freight tracking systems.",
  },
  {
    title: "ERP Integration",
    icon: <FaLaptopCode />,
    desc: "Seamless operational management with integrated logistics and ERP systems.",
  },
  {
    title: "Fleet Monitoring",
    icon: <FaTruckMoving />,
    desc: "Advanced fleet visibility and vehicle performance monitoring for better operations.",
  },
  {
    title: "Warehouse Systems",
    icon: <FaWarehouse />,
    desc: "Modern warehouse coordination systems ensuring efficient cargo movement and storage.",
  },
];

export default function ServiceTechnology() {
  return (
    <section className="relative overflow-hidden bg-[#07111D] py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        <div className="absolute top-[-250px] right-[-120px] w-[550px] h-[550px] bg-[#F5821F]/10 rounded-full blur-[140px]" />

        <div className="absolute bottom-[-250px] left-[-120px] w-[550px] h-[550px] bg-[#1D4F91]/20 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* TOP */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-end">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl px-6 py-3"
            >
              <span className="w-2 h-2 rounded-full bg-[#F5821F]" />

              <span className="uppercase tracking-[4px] text-xs text-white/60">
                Smart Logistics Technology
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="mt-8 text-5xl md:text-7xl lg:text-[90px] font-black leading-[0.92] text-white"
            >
              Technology
              <span className="block py-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F5821F] via-[#ff9f45] to-[#ffd2a8]">
                Driving
              </span>
              <span className="block">Modern Freight</span>
            </motion.h2>
          </div>

          {/* RIGHT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl leading-relaxed text-white/55 max-w-3xl"
          >
            Advanced logistics technologies designed to improve shipment
            visibility, transportation efficiency, operational control, and
            real-time freight management across every delivery stage.
          </motion.p>
        </div>

        {/* MAIN SECTION */}
        <div className="mt-24 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          {/* LEFT PANEL */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 lg:p-10"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[32px] h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop"
                alt="technology logistics"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07111D]/95 via-[#07111D]/20 to-transparent" />
            </div>

            {/* FLOATING CONTENT */}
            <div className="absolute bottom-10 left-10 right-10">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="rounded-[32px] border border-white/10 bg-[#07111D]/80 backdrop-blur-2xl p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="uppercase tracking-[3px] text-xs text-[#F5821F]">
                      Logistics Intelligence
                    </p>

                    <h3 className="mt-5 text-3xl lg:text-4xl font-black leading-tight text-white">
                      Smart Systems For
                      <span className="block">Precision Freight</span>
                    </h3>

                    <p className="mt-5 text-white/55 leading-relaxed max-w-lg">
                      Technology-enabled transportation systems built for
                      visibility, speed, and operational control.
                    </p>
                  </div>

                  <div className="hidden lg:flex w-20 h-20 rounded-3xl border border-[#F5821F]/20 bg-[#F5821F]/10 items-center justify-center text-[#F5821F] text-3xl flex-shrink-0">
                    <FaSatelliteDish />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT GRID */}
          <div className="grid sm:grid-cols-2 gap-8">
            {techData.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 60,
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
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5821F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative z-10 w-20 h-20 rounded-3xl border border-[#F5821F]/20 bg-[#F5821F]/10 flex items-center justify-center text-[#F5821F] text-3xl">
                  {item.icon}
                </div>

                <div className="relative z-10 mt-10">
                  <h3 className="text-3xl font-black leading-tight text-white">
                    {item.title}
                  </h3>

                  <div className="w-16 h-[3px] bg-[#F5821F] rounded-full mt-5" />

                  <p className="mt-6 text-[15px] leading-relaxed text-white/55">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}