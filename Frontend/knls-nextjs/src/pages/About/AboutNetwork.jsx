"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGlobeAmericas,
  FaWarehouse,
  FaShip,
  FaTruckMoving,
  FaArrowRight,
} from "react-icons/fa";

const networkData = [
  {
    number: "25+",
    title: "Countries Served",
    icon: <FaGlobeAmericas />,
    desc: "Strong international logistics operations connecting businesses across major global trade regions.",
  },
  {
    number: "120+",
    title: "Ports Connected",
    icon: <FaShip />,
    desc: "Extensive freight connectivity through key international seaports and transportation hubs.",
  },
  {
    number: "40+",
    title: "Warehouses",
    icon: <FaWarehouse />,
    desc: "Modern warehousing facilities supporting efficient storage, distribution, and cargo management.",
  },
  {
    number: "350+",
    title: "Fleet Strength",
    icon: <FaTruckMoving />,
    desc: "Reliable transportation fleet enabling secure and fast cargo movement across logistics networks.",
  },
];

const AboutNetwork = () => {
  return (
    <section className="relative overflow-hidden bg-[#07111D] py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
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

        {/* GLOW */}
        <div className="absolute top-[-220px] right-[-120px] w-[500px] h-[500px] bg-[#F5821F]/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-[-220px] left-[-120px] w-[500px] h-[500px] bg-[#1D4F91]/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-end">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl px-5 py-3"
            >
              <span className="w-2 h-2 rounded-full bg-[#F5821F]" />

              <span className="uppercase tracking-[3px] text-sm text-white/60">
                Global Network
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="mt-8 text-5xl lg:text-8xl font-black leading-[0.95] text-white"
            >
              Expanding Across
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F5821F] to-[#ffb067]">
                Global Logistics
              </span>
            </motion.h2>
          </div>

          {/* RIGHT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl leading-relaxed text-white/55 max-w-3xl"
          >
            Our international freight network connects businesses through
            strategic ports, warehouses, transportation hubs, and modern
            logistics infrastructure designed for global cargo movement.
          </motion.p>
        </div>

        {/* MAIN SECTION */}
        <div className="mt-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[45px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 lg:p-10">
              {/* MAP IMAGE */}
              <div className="relative overflow-hidden rounded-[35px] h-[700px]">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop"
                  alt="global logistics map"
                  fill
                  className="object-cover opacity-80"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-[#07111D]/45" />

                {/* PULSE POINTS */}
                {[
                  "top-[22%] left-[20%]",
                  "top-[40%] left-[48%]",
                  "top-[30%] right-[22%]",
                  "bottom-[28%] left-[35%]",
                  "bottom-[22%] right-[28%]",
                ].map((pos, index) => (
                  <div key={index} className={`absolute ${pos}`}>
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.4, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.5,
                        delay: index * 0.4,
                      }}
                      className="relative"
                    >
                      <div className="w-4 h-4 rounded-full bg-[#F5821F]" />

                      <div className="absolute inset-0 rounded-full bg-[#F5821F]/40 blur-md scale-150" />
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* FLOATING CARD */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="absolute bottom-16 left-16 right-16 rounded-[30px] border border-white/10 bg-[#07111D]/80 backdrop-blur-xl p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div>
                    <p className="uppercase tracking-[3px] text-xs text-[#F5821F]">
                      Worldwide Freight Operations
                    </p>

                    <h3 className="mt-5 text-3xl lg:text-4xl font-black leading-tight text-white">
                      Connected Through Strategic Logistics Networks
                    </h3>
                  </div>

                  <div className="w-16 h-16 rounded-full bg-[#F5821F] flex items-center justify-center text-white flex-shrink-0">
                    <FaArrowRight />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            {networkData.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                whileHover={{
                  x: 10,
                }}
                className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 lg:p-10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5821F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative z-10 flex items-start gap-6">
                  <div className="w-20 h-20 rounded-3xl bg-[#F5821F]/10 border border-[#F5821F]/20 flex items-center justify-center text-[#F5821F] text-3xl flex-shrink-0">
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-5xl font-black text-white">
                      {item.number}
                    </h3>

                    <h4 className="mt-3 text-3xl font-bold text-white">
                      {item.title}
                    </h4>

                    <div className="w-16 h-[3px] bg-[#F5821F] rounded-full mt-5" />

                    <p className="mt-6 text-lg leading-relaxed text-white/55">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNetwork;