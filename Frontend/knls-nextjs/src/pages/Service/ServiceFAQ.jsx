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
    question: "Do you provide flatbed transportation for oversized loads?",
    answer:
      "Yes. KN Logistics Solutions supports flatbed transportation for wide loads, oversized cargo, lumber, steel, construction materials, and heavy machinery requiring open-deck or specialized trailer support.",
    icon: <FaGlobeAmericas />,
  },
  {
    question: "Do you offer Rolltite trailer services?",
    answer:
      "Yes. Rolltite trailer solutions are available for freight such as lumber and steel where side-loading flexibility and additional cargo protection may be required.",
    icon: <FaShieldAlt />,
  },
  {
    question: "Can you move heavy machinery?",
    answer:
      "Yes. KN Logistics Solutions supports heavy machinery transportation through specialized equipment options, including low-profile and RGN trailer support depending on cargo requirements.",
    icon: <FaSatelliteDish />,
  },
  {
    question: "What type of freight do your reefer services support?",
    answer:
      "Our reefer transportation services primarily support produce and perishable freight, along with other temperature-sensitive shipments requiring refrigerated transport.",
    icon: <FaClock />,
  },
  {
    question: "Do you provide final mile and white glove delivery?",
    answer:
      "Yes. KN Logistics Solutions provides final mile delivery and white glove service for shipments requiring careful handling, placement coordination, and a professional customer delivery experience.",
    icon: <FaShieldAlt />,
  },
  {
    question: "Do you provide dump truck services for construction sites?",
    answer:
      "Yes. KN Logistics Solutions supports dump truck services for construction sites, including per-hour rate options for project-based hauling and site support.",
    icon: <FaGlobeAmericas />,
  },
  {
    question: "Do you offer expedited shipments?",
    answer:
      "Yes. Expedited shipments with team drivers are available for urgent and time-sensitive freight that requires faster transit and dedicated coordination.",
    icon: <FaClock />,
  },
  {
    question: "Where do you provide transloading services?",
    answer:
      "KN Logistics Solutions supports transloading services in Ontario, British Columbia, and Nova Scotia.",
    icon: <FaSatelliteDish />,
  },
  {
    question: "What are drayage services used for?",
    answer:
      "Drayage services are used to move containerized freight between ports, rail terminals, warehouses, and customer facilities as part of import, export, and intermodal logistics operations.",
    icon: <FaGlobeAmericas />,
  },
];

export default function ServiceFAQ() {
  const [active, setActive] = useState(null);

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