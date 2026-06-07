"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  Factory,
  Car,
  Pill,
  Cpu,
  Store,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const industries = [
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    description:
      "Supporting fast-paced retail and online businesses with scalable logistics solutions designed to meet changing customer demands.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Helping manufacturers streamline supply chains, manage inventory movement, and maintain operational continuity.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: Car,
    title: "Automotive",
    description:
      "Providing dependable transportation and logistics coordination for automotive parts, components, and finished products.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: Pill,
    title: "Healthcare & Pharmaceuticals",
    description:
      "Delivering logistics solutions that support the movement of sensitive healthcare products with reliability and care.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d15482442f6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: Cpu,
    title: "Technology & Electronics",
    description:
      "Facilitating secure and efficient logistics operations for technology companies and electronic product distribution.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: Store,
    title: "Consumer Goods",
    description:
      "Managing logistics requirements for consumer products through flexible transportation and distribution strategies.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
  },
];

const HomeIndustries = () => {
  return (
    <section className="relative overflow-hidden bg-[#071120] py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-200px] right-[-100px] w-[450px] h-[450px] bg-[#1D4F91]/20 rounded-full blur-[120px]" />

        <div className="absolute bottom-[-250px] left-[-100px] w-[450px] h-[450px] bg-[#F5821F]/10 rounded-full blur-[120px]" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-10">
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          {/* LEFT */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-3 mb-8"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5821F]" />

              <span className="uppercase tracking-[3px] text-sm text-white/70">
                Industries We Support
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-black leading-[1.05] text-white"
            >
              Logistics Expertise
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F5821F] to-[#ffb067]">
                Across Key Industries
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
            <p className="text-lg leading-relaxed text-white/60">
              We partner with businesses across a wide range of industries,
              delivering customized logistics strategies that align with
              industry-specific requirements, operational goals, and supply
              chain challenges.
            </p>
          </motion.div>
        </div>

        {/* INDUSTRIES GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
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
                className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.04] backdrop-blur-xl"
              >
                <div className="relative h-[420px] overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    />
                  </motion.div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-[#071120]/40 to-transparent" />

                  {/* ICON */}
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl flex items-center justify-center">
                      <Icon className="text-[#F5821F]" size={30} />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <h3 className="text-3xl font-bold text-white leading-tight">
                      {industry.title}
                    </h3>

                    <p className="mt-5 text-white/65 leading-relaxed">
                      {industry.description}
                    </p>

                    <Link href="/industries">
                      <motion.button
                        whileHover={{ x: 6 }}
                        className="group/btn mt-8 flex items-center gap-3 text-white font-medium"
                      >
                        Learn More

                        <div className="w-10 h-10 rounded-xl bg-[#F5821F] flex items-center justify-center">
                          <ArrowUpRight
                            size={18}
                            className="group-hover/btn:rotate-45 transition-transform duration-300"
                          />
                        </div>
                      </motion.button>
                    </Link>
                  </div>
                </div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                  <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#F5821F]/10 to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeIndustries;