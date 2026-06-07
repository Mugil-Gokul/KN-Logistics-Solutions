"use client";

import { motion } from "framer-motion";
import {
  FaClipboardCheck,
  FaBoxOpen,
  FaTruckMoving,
  FaMapMarkedAlt,
  FaCheckCircle,
} from "react-icons/fa";

const processSteps = [
  {
    number: "01",
    title: "Consultation & Booking",
    icon: <FaClipboardCheck />,
    desc: "Our logistics experts assess your shipping requirements and develop the most efficient transportation solution for your cargo.",
  },
  {
    number: "02",
    title: "Planning & Coordination",
    icon: <FaBoxOpen />,
    desc: "Shipment schedules, documentation, routing, and logistics resources are carefully coordinated to ensure smooth execution.",
  },
  {
    number: "03",
    title: "Cargo Pickup",
    icon: <FaTruckMoving />,
    desc: "Cargo is collected and prepared for transportation through our trusted logistics network and operational teams.",
  },
  {
    number: "04",
    title: "Transportation & Tracking",
    icon: <FaMapMarkedAlt />,
    desc: "Shipments move through air, ocean, or ground transportation networks with real-time visibility and status updates.",
  },
  {
    number: "05",
    title: "Delivery & Confirmation",
    icon: <FaCheckCircle />,
    desc: "Cargo is delivered safely and efficiently to its destination with confirmation and complete shipment visibility.",
  },
];

const ServiceProcess = () => {
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
        <div className="absolute top-[-250px] left-[-120px] w-[550px] h-[550px] bg-[#F5821F]/10 rounded-full blur-[140px]" />

        <div className="absolute bottom-[-250px] right-[-120px] w-[550px] h-[550px] bg-[#1D4F91]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* TOP SECTION */}
        <div className="text-center max-w-5xl mx-auto">
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
              Logistics Process
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
            className="mt-8 text-5xl md:text-7xl lg:text-[90px] font-black leading-[0.92] text-[#07111D]"
          >
            Simple Process.
            <span className="block py-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F5821F] via-[#ff9f45] to-[#ffbc7d]">
              Reliable Logistics
            </span>
            <span className="block">Execution.</span>
          </motion.h2>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="mt-8 text-lg lg:text-xl leading-relaxed text-slate-500 max-w-3xl mx-auto"
          >
            From initial consultation to final delivery, KNLS follows a
            structured logistics process that ensures efficient planning,
            seamless transportation, real-time visibility, and reliable supply
            chain execution.
          </motion.p>
        </div>

        {/* PROCESS TIMELINE */}
        <div className="relative mt-28">
          {/* CENTER LINE */}
          <div className="hidden lg:block absolute top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

          {/* PROCESS GRID */}
          <div className="grid lg:grid-cols-5 gap-8">
            {processSteps.map((item, index) => (
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
                className={`relative ${index % 2 !== 0 ? "lg:mt-24" : ""}`}
              >
                {/* CONNECTOR */}
                <div className="hidden lg:flex absolute top-20 right-[-35px] z-20 items-center justify-center">
                  {index !== processSteps.length - 1 && (
                    <div className="w-16 h-16 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-[#F5821F] text-xl">
                      →
                    </div>
                  )}
                </div>

                {/* CARD */}
                <motion.div
                  whileHover={{
                    y: -10,
                  }}
                  className="group relative overflow-hidden rounded-[38px] border border-slate-200 bg-white p-8 lg:p-10 h-full shadow-[0_15px_60px_rgba(0,0,0,0.04)]"
                >
                  {/* HOVER EFFECT */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F5821F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* NUMBER */}
                  <span className="absolute top-6 right-6 text-7xl font-black text-slate-100">
                    {item.number}
                  </span>

                  {/* ICON */}
                  <div className="relative z-10 w-20 h-20 rounded-3xl border border-[#F5821F]/10 bg-[#FFF4EA] flex items-center justify-center text-[#F5821F] text-3xl">
                    {item.icon}
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 mt-10">
                    <h3 className="text-xl font-black leading-tight text-[#07111D]">
                      {item.title}
                    </h3>

                    <div className="w-16 h-[3px] bg-[#F5821F] rounded-full mt-5" />

                    <p className="mt-6 text-[15px] leading-relaxed text-slate-500">
                      {item.desc}
                    </p>
                  </div>

                  {/* FOOTER */}
                  <div className="relative z-10 mt-10 pt-6 border-t border-slate-100">
                    <span className="uppercase tracking-[3px] text-xs text-slate-400">
                      KNLS Logistics
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;