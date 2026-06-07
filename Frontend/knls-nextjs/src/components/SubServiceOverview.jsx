"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const SubServiceOverview = ({
  title,
  highlight,
  desc,
  points,
  image,
}) => {
  return (
    <section className="relative py-28 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-orange-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-blue-200/20 blur-3xl rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center relative">
        {/* TEXT SECTION */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Title */}
          <motion.h2
            custom={1}
            variants={textVariants}
            className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900"
          >
            {title}
            <span className="text-[#F5821F]"> {highlight}</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            custom={2}
            variants={textVariants}
            className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl"
          >
            {desc}
          </motion.p>

          {/* Points */}
          <div className="mt-10 space-y-4">
            {points.map((point, index) => (
              <motion.div
                key={index}
                custom={index + 3}
                variants={textVariants}
                className="flex items-start gap-3 bg-gray-50 hover:bg-gray-100 transition px-4 py-3 rounded-xl border border-gray-100"
              >
                <FaCheckCircle className="text-[#F5821F] mt-1 shrink-0" />

                <span className="text-gray-700 text-sm md:text-base">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Glow frame */}
          <div className="absolute inset-0 rounded-[35px] bg-gradient-to-tr from-orange-400/20 via-transparent to-blue-400/10 blur-xl group-hover:blur-2xl transition-all duration-500" />

          {/* Image wrapper */}
          <div className="relative overflow-hidden rounded-[35px] shadow-2xl border border-gray-100 h-[520px]">
            <Image
              src={image}
              alt={title || "Service Image"}
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubServiceOverview;