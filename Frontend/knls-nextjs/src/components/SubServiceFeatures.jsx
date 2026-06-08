"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const SubServiceFeatures = ({ title, subtitle, features }) => {
  return (
    <section className="relative overflow-hidden bg-[#071120] py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-[#F5821F]/10 rounded-full blur-[130px]" />

        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-[#1D4F91]/20 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-[#F5821F]" />

            <span className="uppercase tracking-[4px] text-xs text-white/60">
              Service Capabilities
            </span>
          </div>

          <h2 className="mt-8 text-5xl lg:text-7xl font-black text-white leading-[1]">
            {title}
          </h2>

          <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        </div>

        {/* Features */}
        <div className="mt-24 space-y-10">
          {features.map((feature, index) => (
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
              className={`group relative overflow-hidden rounded-[35px] border transition-all duration-500 ${
                feature.featured
                  ? "border-[#F5821F]/30 bg-gradient-to-r from-[#F5821F]/10 to-white/[0.03]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <div className="grid lg:grid-cols-[180px_1fr_auto] gap-8 items-center p-8 lg:p-12">
                {/* Number */}
                <div>
                  <h3 className="text-7xl lg:text-8xl font-black text-white/10">
                    {String(index + 1).padStart(2, "0")}
                  </h3>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-5 mb-6">
                    <div
                      className={`w-20 h-20 rounded-3xl flex items-center justify-center text-4xl ${
                        feature.featured
                          ? "bg-[#F5821F] text-white"
                          : "bg-white/10"
                      }`}
                    >
                      {feature.icon}
                    </div>

                    {feature.featured && (
                      <span className="px-4 py-2 rounded-full bg-[#F5821F]/15 border border-[#F5821F]/20 text-[#ffb067] text-sm font-medium">
                        Featured Service
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-black text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-5 text-white/65 text-lg leading-relaxed max-w-4xl">
                    {feature.desc}
                  </p>
                </div>

              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-[radial-gradient(circle_at_center,rgba(245,130,31,0.12),transparent_70%)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubServiceFeatures;