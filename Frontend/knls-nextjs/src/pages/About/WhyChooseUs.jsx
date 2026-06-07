"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaGlobeAmericas,
} from "react-icons/fa";

const chooseData = [
  {
    title: "20+ Years of Experience",
    icon: <FaShippingFast />,
    desc: "With over two decades of industry expertise, KNLS has built a proven track record in freight management, transportation, and global supply chain solutions across diverse industries.",
  },
  {
    title: "Global Freight Network",
    icon: <FaGlobeAmericas />,
    desc: "Our extensive international network connects major ports, airports, warehouses, and transportation partners, ensuring seamless cargo movement across global markets.",
  },
  {
    title: "End-to-End Logistics",
    icon: <FaShieldAlt />,
    desc: "From Air Freight and Ocean Freight to Ground Transportation, Warehousing, Reefer Logistics, and Last-Mile Delivery, we provide complete logistics solutions under one roof.",
  },
  {
    title: "Customer-Centric Service",
    icon: <FaHeadset />,
    desc: "We prioritize responsiveness, transparency, and personalized support, delivering logistics solutions tailored to each customer's operational requirements.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-28 lg:py-36">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        <div className="absolute top-[-200px] right-[-120px] w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-200px] left-[-120px] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500" />

              <span className="uppercase tracking-[4px] text-xs text-slate-500">
                Why KNLS
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-8 text-5xl md:text-7xl lg:text-[95px] font-black leading-[0.92] text-slate-900"
            >
              Elite Freight

              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300">
                Why Businesses Trust KNLS
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="text-lg leading-relaxed text-slate-600">
              KNLS combines over 20 years of logistics expertise, a proven
              global freight network, and customer-focused service to deliver
              reliable, scalable, and efficient supply chain solutions
              worldwide.
            </p>
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="mt-24 grid xl:grid-cols-[0.85fr_1.15fr] gap-10">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[45px] border border-slate-200 shadow-lg min-h-[950px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop"
              alt="freight"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 40vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/10 to-transparent" />
          </motion.div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 gap-8">
            {chooseData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`group relative overflow-hidden rounded-[35px] border border-slate-200 bg-white shadow-md p-8 lg:p-10 ${
                  index === 1 || index === 3 ? "md:translate-y-10" : ""
                }`}
              >
                <div className="absolute inset-0 bg-orange-50 opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <div className="w-14 h-[3px] bg-orange-500 rounded-full mt-4" />

                  <p className="mt-5 text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;