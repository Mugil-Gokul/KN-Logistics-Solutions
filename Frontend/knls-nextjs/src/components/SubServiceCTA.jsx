"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Truck,
  ShieldCheck,
  Clock3,
  Route,
} from "lucide-react";

const SubServiceCTA = ({ title, desc, button }) => {
  return (
    <section className="relative overflow-hidden bg-[#071120] py-28 lg:py-36">
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

        <div className="absolute top-[-250px] left-[-150px] w-[600px] h-[600px] bg-[#F5821F]/15 rounded-full blur-[150px]" />

        <div className="absolute bottom-[-250px] right-[-150px] w-[600px] h-[600px] bg-[#1D4F91]/20 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-10">
        {/* Main CTA Panel */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-xl"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5821F]/10 via-transparent to-[#1D4F91]/10" />

          <div className="relative p-10 lg:p-16">
            {/* Tag */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3">
              <span className="w-2 h-2 rounded-full bg-[#F5821F]" />

              <span className="uppercase tracking-[4px] text-xs text-white/60">
                Logistics Partnership
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-8 text-5xl lg:text-7xl font-black leading-[0.95] text-white max-w-5xl">
              {title}
            </h2>

            {/* Description */}
            <p className="mt-8 text-lg lg:text-xl leading-relaxed text-white/65 max-w-3xl">
              {desc}
            </p>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-5 mt-12">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <Truck className="text-[#F5821F]" size={24} />

                <div>
                  <h4 className="text-white font-semibold">
                    Reliable Freight Movement
                  </h4>

                  <p className="text-white/50 text-sm mt-1">
                    Specialized transportation solutions
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <ShieldCheck className="text-[#F5821F]" size={24} />

                <div>
                  <h4 className="text-white font-semibold">
                    Safe Cargo Handling
                  </h4>

                  <p className="text-white/50 text-sm mt-1">
                    Secure transportation and compliance
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <Clock3 className="text-[#F5821F]" size={24} />

                <div>
                  <h4 className="text-white font-semibold">
                    Responsive Support
                  </h4>

                  <p className="text-white/50 text-sm mt-1">
                    Dedicated logistics coordination
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Area */}
            <div className="mt-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 border-t border-white/10 pt-10">
              <div>
                <h3 className="text-3xl font-black text-white">
                  Let’s Move Your Freight Forward
                </h3>

                <p className="mt-3 text-white/60 max-w-xl">
                  Whether you need flatbed transportation, reefer logistics,
                  final mile delivery, drayage, transloading, or specialized
                  freight support, our team is ready to help.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 px-10 py-6 rounded-full bg-gradient-to-r from-[#F5821F] to-[#ff9b42] text-white font-semibold shadow-[0_20px_50px_rgba(245,130,31,0.35)] hover:scale-105 transition-all duration-300"
              >
                {button}

                <ArrowUpRight
                  size={22}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubServiceCTA;