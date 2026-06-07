"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTruck, FaGlobeAsia, FaShieldAlt } from "react-icons/fa";

const SubServiceCTA = ({ title, desc, button }) => {
  return (
    <section className="relative py-28 bg-[#071120] overflow-hidden text-white">
      {/* Grid Background */}{" "}
      <div className="absolute inset-0 opacity-10">
        {" "}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]" />{" "}
      </div>
      {/* Accent Lights */}
      <div className="absolute top-[-150px] left-[-150px] w-[350px] h-[350px] bg-orange-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="max-w-6xl mx-auto px-6 relative grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {title}
          </h2>

          <div className="w-24 h-[3px] bg-orange-500 mt-5 rounded-full" />

          <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-md">
            {desc}
          </p>

          <div className="mt-8 space-y-4 text-sm text-white/70">
            <div className="flex items-center gap-3">
              <FaTruck className="text-orange-400" />
              Fast & reliable logistics execution
            </div>

            <div className="flex items-center gap-3">
              <FaGlobeAsia className="text-orange-400" />
              Global shipping coverage support
            </div>

            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-orange-400" />
              Secure handling & documentation
            </div>
          </div>
        </motion.div>

        {/* RIGHT CTA CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-blue-500/10" />

            <div className="relative text-center">
              <h3 className="text-2xl font-bold">Ready to get started?</h3>

              <p className="mt-4 text-white/60 text-sm">
                Speak with our logistics team in minutes
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="mt-8 w-full flex items-center justify-center py-4 rounded-xl bg-[#F5821F] font-semibold shadow-lg relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-white/20 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 skew-x-12" />
                  <span className="relative">{button}</span>
                </Link>
              </motion.div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-center text-xs text-white/60">
                <div className="bg-white/5 rounded-xl py-3 border border-white/10">
                  24/7 Support
                </div>

                <div className="bg-white/5 rounded-xl py-3 border border-white/10">
                  Instant Response
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubServiceCTA;
