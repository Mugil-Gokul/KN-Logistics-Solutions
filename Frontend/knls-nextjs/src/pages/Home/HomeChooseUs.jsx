"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  ShieldCheck,
  Clock3,
  Container,
  CheckCircle2,
} from "lucide-react";

const chooseFeatures = [
  {
    icon: Globe2,
    title: "End-to-End Logistics Expertise",
    description:
      "From international freight movement to final delivery, we coordinate every stage of the supply chain through a single trusted logistics partner.",
  },
  {
    icon: ShieldCheck,
    title: "Visibility & Control",
    description:
      "Advanced tracking and operational transparency provide greater visibility, helping businesses make informed logistics decisions.",
  },
  {
    icon: Clock3,
    title: "Flexible & Scalable Solutions",
    description:
      "Our logistics services adapt to changing business demands, supporting everything from routine shipments to complex supply chain requirements.",
  },
  {
    icon: Container,
    title: "Customer-Focused Service",
    description:
      "We work closely with every client to deliver tailored logistics strategies that improve efficiency, reliability, and long-term growth.",
  },
];

const HomeChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* GLOW */}
        <div className="absolute top-[-200px] right-[-100px] w-[450px] h-[450px] bg-[#1D4F91]/5 rounded-full blur-[120px]" />

        <div className="absolute bottom-[-200px] left-[-100px] w-[450px] h-[450px] bg-[#F5821F]/10 rounded-full blur-[120px]" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0B1E35 1px, transparent 1px),
              linear-gradient(to bottom, #0B1E35 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-10">
        {/* TOP CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            {/* TAG */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 rounded-full border border-[#1D4F91]/10 bg-white px-5 py-3 shadow-sm mb-8"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5821F]" />

              <span className="uppercase tracking-[3px] text-sm text-[#1D4F91] font-medium">
                Why KNLS
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-black leading-[1.05] text-[#071120]"
            >
              Trusted Logistics

              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1D4F91] to-[#F5821F]">
                Solutions Built Around
              </span>

              Your Business Needs.
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
              className="mt-8 text-lg leading-relaxed text-slate-600 max-w-2xl"
            >
              At KN Logistics Solutions, we understand that every supply chain
              is unique. By combining industry expertise, flexible operations,
              and customer-focused service, we help businesses navigate complex
              logistics challenges with confidence and efficiency.
            </motion.p>

            {/* CHECK LIST */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-5 mt-10"
            >
              {[
                "Customized Logistics Solutions",
                "End-to-End Supply Chain Support",
                "Real-Time Shipment Visibility",
                "Dedicated Customer Service",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5821F]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2
                      className="text-[#F5821F]"
                      size={22}
                    />
                  </div>

                  <p className="font-semibold text-[#071120]">
                    {item}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="relative grid gap-6">
              {chooseFeatures.map((item, index) => {
                const Icon = item.icon;

                return (
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
                      delay: index * 0.15,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -8,
                    }}
                    className={`group relative overflow-hidden rounded-[35px] border border-slate-200 bg-white p-8 shadow-xl ${
                      index % 2 !== 0
                        ? "lg:ml-16"
                        : "lg:mr-16"
                    }`}
                  >
                    {/* HOVER EFFECT */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#F5821F]/5 to-[#1D4F91]/5" />
                    </div>

                    <div className="relative flex items-start gap-6">
                      {/* ICON */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-3xl bg-[#071120] flex items-center justify-center shadow-lg">
                          <Icon
                            className="text-[#F5821F]"
                            size={34}
                          />
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-sm uppercase tracking-[3px] text-[#F5821F]">
                            0{index + 1}
                          </span>

                          <div className="w-12 h-[1px] bg-[#F5821F]/40" />
                        </div>

                        <h3 className="text-2xl font-bold text-[#071120]">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeChooseUs;