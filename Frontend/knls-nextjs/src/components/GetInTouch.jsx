"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock3, ArrowUpRight } from "lucide-react";

const contactDetails = [
  { icon: Phone, title: "Call Us", value: "+1 (647) 313-4191" },
  { icon: Mail, title: "Email", value: "info@knls.ca" },
  { icon: Clock3, title: "Hours", value: "Mon - Fri | 8:30 AM - 5:00 PM" },
  { icon: MapPin, title: "Support", value: "Freight & Logistics Assistance" },
];

const GetInTouch = () => {
  return (
    <section className="relative overflow-hidden bg-[#071120] py-28">
      {/* BACKGROUND */}{" "}
      <div className="absolute inset-0 overflow-hidden">
        {" "}
        <div className="absolute top-[-200px] left-[-100px] w-[420px] h-[420px] bg-[#1D4F91]/20 rounded-full blur-[120px]" />{" "}
        <div className="absolute bottom-[-200px] right-[-100px] w-[420px] h-[420px] bg-[#F5821F]/10 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
          linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px)
        `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* CENTER HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5821F]" />
            <span className="uppercase tracking-[3px] text-sm text-white/70">
              Get In Touch
            </span>
          </div>

          <h2 className="mt-8 text-4xl md:text-6xl font-black text-white leading-tight">
            Request Logistics Support
          </h2>

          <p className="mt-6 text-white/60 max-w-2xl mx-auto">
            Fast, secure, and scalable logistics solutions built for modern
            supply chains worldwide.
          </p>
        </motion.div>

        {/* FLOATING INFO GRID */}
        <div className="mt-16 relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactDetails.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#F5821F]/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition" />

                  <div className="relative rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 text-center overflow-hidden">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-[#F5821F]/10 flex items-center justify-center mb-5">
                      <Icon className="text-[#F5821F]" size={24} />
                    </div>

                    <h3 className="text-white font-bold text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-white/60 text-sm">{item.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA BLOCK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block relative rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl px-10 py-12">
            <div className="absolute inset-0 bg-[#F5821F]/10 blur-2xl rounded-[40px]" />

            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-black text-white">
                Need a Logistics Quote?
              </h3>

              <p className="mt-5 text-white/60 max-w-xl mx-auto">
                Connect with our team and get a tailored solution for your
                shipping needs in minutes.
              </p>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-8 inline-flex items-center gap-3 bg-[#F5821F] px-10 py-5 rounded-2xl font-semibold text-white shadow-[0_20px_50px_rgba(245,130,31,0.25)] relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-white/20 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 skew-x-12" />

                  <span className="relative flex items-center gap-3">
                    Request A Quote
                    <ArrowUpRight size={22} />
                  </span>
                </motion.button>
              </Link>

              <p className="mt-6 text-xs text-white/40 uppercase tracking-[2px]">
                Fast Response • Global Coverage • Secure Handling
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;
