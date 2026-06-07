"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe2,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  "20+ Years of Industry Experience",
  "Live Visibility Through Real-Time Tracking",
  "Global Freight Management",
  "From Global Transport to Last Mile",
];

const HomeAbout = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] py-24 lg:py-32">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-150px] right-[-100px] w-[400px] h-[400px] bg-[#1D4F91]/5 rounded-full blur-[120px]" />

        <div className="absolute bottom-[-200px] left-[-100px] w-[350px] h-[350px] bg-[#F5821F]/10 rounded-full blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0B1E35 1px, transparent 1px),
              linear-gradient(to bottom, #0B1E35 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE */}
          <div className="relative">
            {/* MAIN IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[40px] h-[700px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop"
                alt="About Logistics"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071120]/70 via-transparent to-transparent" />
            </motion.div>

            {/* FLOATING CARD */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute top-10 -right-5 lg:-right-10 bg-[#0B1E35] rounded-[28px] p-5 shadow-2xl border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#F5821F]/15 flex items-center justify-center">
                  <Globe2 className="text-[#F5821F]" size={26} />
                </div>

                <div>
                  <p className="text-white/50 text-sm uppercase tracking-[2px]">
                    Experience
                  </p>

                  <h4 className="text-white font-bold text-lg">
                    20+ Years
                  </h4>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            {/* SECTION TAG */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 rounded-full bg-[#1D4F91]/5 border border-[#1D4F91]/10 px-5 py-3 mb-8"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5821F]" />

              <span className="uppercase tracking-[3px] text-sm font-medium text-[#1D4F91]">
                About KNLS
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-black leading-[1.1] text-[#071120]"
            >
              Wherever It Needs

              <span className="block py-3 text-transparent bg-clip-text bg-gradient-to-r from-[#1D4F91] to-[#F5821F]">
                To Go, Trust Us To
              </span>

              Get It There.
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
              KN Logistics Solutions is a recognized leader in global supply
              chain management, backed by a proven freight management network
              and decades of industry expertise. We deliver best-in-class
              transportation and logistics solutions that help businesses move
              products efficiently, reliably, and cost-effectively across
              regional and international markets.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-full bg-[#F5821F] px-7 py-4 text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                Read More
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>

            {/* FEATURES */}
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
              {features.map((item, index) => (
                <motion.div
                  whileHover={{ x: 6 }}
                  key={index}
                  className="flex items-center gap-4 rounded-2xl bg-white border border-slate-100 p-5 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F5821F]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2
                      className="text-[#F5821F]"
                      size={22}
                    />
                  </div>

                  <p className="font-semibold text-[#071120]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* BOTTOM CARDS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 mt-12"
            >
              {/* CARD 1 */}
              <div className="relative overflow-hidden rounded-[30px] bg-[#0B1E35] p-8 shadow-2xl">
                <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-[#F5821F]/10 rounded-full blur-3xl" />

                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#F5821F]/15 flex items-center justify-center mb-6">
                    <ShieldCheck
                      className="text-[#F5821F]"
                      size={30}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Real-Time Visibility
                  </h3>

                  <p className="mt-4 text-white/65 leading-relaxed">
                    Stay informed with live shipment tracking and
                    complete visibility across every stage of the supply
                    chain.
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="relative overflow-hidden rounded-[30px] bg-white border border-slate-200 p-8 shadow-xl">
                <div className="absolute bottom-0 left-0 w-[120px] h-[120px] bg-[#1D4F91]/5 rounded-full blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#1D4F91]/10 flex items-center justify-center">
                      <Globe2
                        className="text-[#1D4F91]"
                        size={30}
                      />
                    </div>

                    <ArrowUpRight
                      className="text-[#F5821F]"
                      size={28}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-[#071120]">
                    Global To Last Mile
                  </h3>

                  <p className="mt-4 text-slate-600 leading-relaxed">
                    From international freight movements to final-mile
                    delivery, KNLS ensures seamless logistics execution
                    from origin to destination.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;