"use client";

import { motion } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";

const valuesData = [
  {
    icon: <FaBullseye />,
    title: "Our Mission",
    subtitle: "Delivering Reliable Solutions",
    desc: "To provide flexible, scalable, and dependable transportation and supply chain solutions that help businesses optimize freight movement, improve efficiency, and achieve sustainable growth across domestic and international markets.",
  },

  {
    icon: <FaEye />,
    title: "Our Vision",
    subtitle: "A Trusted Logistics Partner",
    desc: "To be recognized as a leading global logistics and freight management provider, delivering innovative transportation solutions, exceptional customer service, and long-term value through operational excellence.",
  },

  {
    icon: <FaHandshake />,
    title: "Our Commitment",
    subtitle: "Customer First Approach",
    desc: "We are committed to building lasting partnerships through transparency, responsiveness, reliability, and personalized logistics solutions that support our customers' evolving supply chain requirements.",
  },

  {
    icon: <FaShieldAlt />,
    title: "Safety & Integrity",
    subtitle: "Responsible Operations",
    desc: "Employee safety, shipment security, compliance, and ethical business practices are fundamental to everything we do. We maintain the highest standards to ensure reliable and secure transportation services.",
  },
];

const AboutValues = () => {
  return (
    <section className="relative overflow-hidden bg-[#06101C] py-24 lg:py-32">
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
        <div className="absolute top-[-200px] left-[-100px] w-[450px] h-[450px] bg-[#F5821F]/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-[-200px] right-[-100px] w-[450px] h-[450px] bg-[#1D4F91]/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1550px] mx-auto px-6 lg:px-10">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-end">
          {/* LEFT */}
          <div>
            {/* LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl px-5 py-3"
            >
              <span className="w-2 h-2 rounded-full bg-[#F5821F]" />

              <span className="uppercase tracking-[3px] text-sm text-white/60">
                Mission & Values
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="mt-8 text-5xl lg:text-7xl font-black leading-[1] text-white"
            >
              Built On
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F5821F] to-[#ffb067]">
                Experience & Commitment
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
            KNLS has built its reputation on
            reliability, customer service, operational excellence, and a
            commitment to delivering transportation and supply chain
            solutions that businesses can trust.
          </motion.p>
        </div>

        {/* VALUES GRID */}
        <div className="grid lg:grid-cols-2 gap-8 mt-20">
          {valuesData.map((item, index) => (
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
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 lg:p-10"
            >
              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5821F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* NUMBER */}
              <span className="absolute top-8 right-8 text-7xl font-black text-white/[0.04]">
                0{index + 1}
              </span>

              {/* ICON */}
              <div className="relative z-10 w-20 h-20 rounded-3xl bg-[#F5821F]/10 border border-[#F5821F]/20 flex items-center justify-center text-[#F5821F] text-3xl">
                {item.icon}
              </div>

              {/* CONTENT */}
              <div className="relative z-10 mt-10">
                <p className="uppercase tracking-[3px] text-xs text-[#F5821F]">
                  {item.subtitle}
                </p>

                <h3 className="mt-4 text-4xl font-black text-white">
                  {item.title}
                </h3>

                <div className="w-20 h-[3px] bg-[#F5821F] rounded-full mt-6" />

                <p className="mt-8 text-lg leading-relaxed text-white/55">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;