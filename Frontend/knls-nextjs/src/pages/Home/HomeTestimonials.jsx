"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    name: "Supply Chain Manager",
    company: "Retail Distribution Sector",
    feedback:
      "KN Logistics Solutions has consistently provided reliable transportation support and excellent communication throughout the shipping process. Their team adapts quickly to changing requirements and keeps our operations running smoothly.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Operations Director",
    company: "Manufacturing Industry",
    feedback:
      "From freight coordination to warehousing support, the KNLS team delivers dependable logistics solutions tailored to our business needs. Their professionalism and responsiveness make them a trusted logistics partner.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Logistics Coordinator",
    company: "E-Commerce Business",
    feedback:
      "Real-time shipment visibility and proactive updates have helped us improve delivery planning and customer satisfaction. KN Logistics Solutions provides the flexibility and reliability we look for in a logistics provider.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function HomeTestimonials() {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-180px] right-[-100px] w-[400px] h-[400px] bg-[#1D4F91]/5 rounded-full blur-[120px]" />

        <div className="absolute bottom-[-180px] left-[-100px] w-[400px] h-[400px] bg-[#F5821F]/10 rounded-full blur-[120px]" />

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

      <div className="relative z-10 max-w-[1450px] mx-auto px-6 lg:px-10">
        {/* TOP CONTENT */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          {/* LEFT */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm mb-8"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5821F]" />

              <span className="uppercase tracking-[3px] text-sm text-[#1D4F91] font-medium">
                Client Testimonials
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-black leading-[1.05] text-[#071120]"
            >
              Trusted By Businesses
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1D4F91] to-[#F5821F]">
                Built Through Long-Term Partnerships
              </span>
            </motion.h2>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="text-lg leading-relaxed text-slate-600">
              Businesses across multiple industries rely on KN Logistics
              Solutions for dependable transportation, warehousing, freight
              management, and supply chain support tailored to their operational
              requirements.
            </p>
          </motion.div>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[35px] border border-slate-200 bg-white p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              {/* HOVER EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5821F]/5 to-[#1D4F91]/5" />
              </div>

              {/* QUOTE + STARS */}
              <div className="relative flex items-center justify-between">
                <div className="w-18 h-18 rounded-3xl bg-[#071120] flex items-center justify-center">
                  <Quote
                    className="text-[#F5821F]"
                    size={34}
                  />
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[#F5821F] text-[#F5821F]"
                    />
                  ))}
                </div>
              </div>

              {/* FEEDBACK */}
              <p className="relative mt-10 text-lg leading-relaxed text-slate-600">
                “{item.feedback}”
              </p>

              <div className="relative mt-10 w-full h-[1px] bg-slate-200" />

              {/* PROFILE */}
              <div className="relative mt-8 flex items-center gap-5">
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-2xl object-cover"
                  />

                  <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#071120]">
                    {item.name}
                  </h4>

                  <p className="mt-1 text-slate-500">
                    {item.company}
                  </p>
                </div>
              </div>

              {/* BACKGROUND QUOTE */}
              <div className="absolute -bottom-10 right-0 text-[180px] font-black text-[#071120]/[0.03] leading-none">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}