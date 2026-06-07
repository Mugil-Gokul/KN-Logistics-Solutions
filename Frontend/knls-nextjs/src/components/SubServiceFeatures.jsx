"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const SubServiceFeatures = ({ title, subtitle, features }) => {
  return (
    <section className="relative py-28 bg-[#F7F8FA] overflow-hidden">

      {/* Decorative Background Blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            {title}
          </h2>

          <div className="w-24 h-[3px] bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-4 rounded-full" />

          <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/0 via-orange-400/0 to-orange-400/0 group-hover:from-orange-400/20 group-hover:via-orange-300/10 group-hover:to-transparent blur-xl transition-all duration-500" />

              {/* Card */}
              <div className="relative bg-white p-7 rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-500">

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50 text-[#F5821F] group-hover:bg-orange-100 transition">
                  <span className="text-2xl">{f.icon}</span>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold text-gray-900 group-hover:text-orange-500 transition">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {f.desc}
                </p>

                
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SubServiceFeatures;