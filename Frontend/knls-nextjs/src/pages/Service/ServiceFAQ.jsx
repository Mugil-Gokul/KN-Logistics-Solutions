"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaClock,
  FaSatelliteDish,
  FaGlobeAmericas,
  FaShieldAlt,
} from "react-icons/fa";

const faqData = [
  {
    question: "What logistics services does KN Logistics Solutions provide?",
    answer:
      "We offer a complete range of logistics and transportation solutions including Full Truck Load (FTL), route optimization, cargo handling, warehousing, express freight services, and supply chain support tailored to business requirements.",
    icon: <FaGlobeAmericas />,
  },
  {
    question: "Do you handle time-sensitive and urgent shipments?",
    answer:
      "Yes. Our express freight and dedicated transportation solutions are designed to support urgent deliveries, ensuring cargo reaches its destination safely and within the required timeline.",
    icon: <FaClock />,
  },
  {
    question: "How do you ensure cargo safety during transportation?",
    answer:
      "Cargo safety is a top priority. We follow strict handling procedures, secure loading practices, route planning, and operational monitoring to minimize risks and ensure reliable shipment movement.",
    icon: <FaShieldAlt />,
  },
  {
    question: "Can your services be customized for different industries?",
    answer:
      "Absolutely. We understand that every business has unique logistics requirements. Our team works closely with clients to provide flexible transportation, warehousing, and freight solutions that align with their operational needs.",
    icon: <FaSatelliteDish />,
  },
];

export default function ServiceFAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#F7F8FA] py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #07111D 1px, transparent 1px),
              linear-gradient(to bottom, #07111D 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        {/* GLOW */}
        <div className="absolute top-[-220px] right-[-120px] w-[550px] h-[550px] bg-[#F5821F]/10 rounded-full blur-[130px]" />

        <div className="absolute bottom-[-220px] left-[-120px] w-[550px] h-[550px] bg-[#1D4F91]/10 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-[1550px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-28">
            {/* TAG */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#F5821F]" />

              <span className="uppercase tracking-[4px] text-xs text-slate-500">
                Frequently Asked Questions
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="mt-8 text-5xl md:text-7xl lg:text-[88px] font-black leading-[0.92] text-[#07111D]"
            >
              Logistics
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F5821F] via-[#ff9f45] to-[#ffbc7d]">
                Questions
              </span>
              <span className="block">Answered Clearly</span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="mt-8 text-lg leading-relaxed text-slate-500 max-w-xl"
            >
              Find answers to common questions about our logistics,
              transportation, warehousing, cargo handling, and freight
              management services.
            </motion.p>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {faqData.map((item, index) => {
              const isOpen = active === index;

              return (
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
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className={`overflow-hidden rounded-[32px] border transition-all duration-500 ${
                    isOpen
                      ? "border-[#F5821F]/20 bg-white shadow-[0_20px_70px_rgba(245,130,31,0.08)]"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {/* HEADER */}
                  <button
                    onClick={() => setActive(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-6 text-left p-8 lg:p-10"
                  >
                    <div className="flex items-start gap-6">
                      {/* ICON */}
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 ${
                          isOpen
                            ? "bg-[#F5821F] text-white"
                            : "bg-[#FFF3E7] text-[#F5821F]"
                        }`}
                      >
                        {item.icon}
                      </div>

                      {/* TITLE */}
                      <div>
                        <h3 className="mt-3 text-2xl lg:text-3xl font-black leading-tight text-[#07111D]">
                          {item.question}
                        </h3>
                      </div>
                    </div>

                    {/* ARROW */}
                    <motion.div
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className={`min-w-[60px] w-[60px] h-[60px] rounded-full border flex items-center justify-center text-lg transition-all duration-300 ${
                        isOpen
                          ? "bg-[#F5821F] border-[#F5821F] text-white"
                          : "border-slate-200 text-slate-500"
                      }`}
                    >
                      <FaChevronDown />
                    </motion.div>
                  </button>

                  {/* CONTENT */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 lg:px-10 pb-10">
                          <div className="ml-[88px] border-t border-slate-200 pt-8">
                            <p className="text-lg leading-relaxed text-slate-500 max-w-3xl">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}