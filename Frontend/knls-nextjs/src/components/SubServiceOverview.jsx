"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const SubServiceOverview = ({
  tag = "Service Overview",
  title,
  highlight,
  intro,
  description,
  points,
  image,
}) => {
  return (
    <section className="relative py-28 bg-[#F8FAFC] overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-200px] right-[-100px] w-[450px] h-[450px] bg-[#F5821F]/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-[-200px] left-[-100px] w-[450px] h-[450px] bg-[#1D4F91]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-16 items-start">
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <div className="relative overflow-hidden rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
              <Image
                src={image}
                alt={title}
                width={1200}
                height={1400}
                className="w-full h-[650px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071120]/70 via-transparent to-transparent" />

              {/* FLOATING CARD */}
              <div className="absolute bottom-8 left-8 bg-white rounded-3xl p-6 max-w-[300px] shadow-2xl">
                <p className="text-[#F5821F] text-xs uppercase tracking-[3px] font-bold">
                  KN Logistics Solutions
                </p>

                <h4 className="mt-3 text-2xl font-black text-[#07111D]">
                  Reliable Logistics Support
                </h4>

                <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                  Built around safety, visibility, operational efficiency,
                  and dependable freight execution.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* TAG */}
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F5821F]" />

              <span className="uppercase tracking-[3px] text-xs text-slate-500">
                {tag}
              </span>
            </div>

            {/* TITLE */}
            <h2 className="mt-8 text-5xl lg:text-7xl font-black leading-[0.95] text-[#07111D]">
              {title}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F5821F] to-[#ff9f45]">
                {highlight}
              </span>
            </h2>

            {/* INTRO */}
            <p className="mt-8 text-xl leading-relaxed text-slate-700 font-medium">
              {intro}
            </p>

            <div className="w-24 h-[3px] bg-[#F5821F] rounded-full mt-8" />

            {/* DESCRIPTION */}
            <div className="mt-8">
              <p className="text-lg leading-relaxed text-slate-500 whitespace-pre-line">
                {description}
              </p>
            </div>

            {/* HIGHLIGHTS */}
            <div className="mt-12">
              <h3 className="text-2xl font-black text-[#07111D] mb-6">
                Key Service Highlights
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {points.map((point, index) => (
                  <div
                    key={index}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#FFF3E7] flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle className="text-[#F5821F]" />
                    </div>

                    <p className="text-slate-700 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubServiceOverview;