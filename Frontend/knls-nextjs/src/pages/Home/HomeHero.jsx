"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Truck,
  Warehouse,
  Globe,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Hero1 from "../../assests/banner.jpg";
import Hero2 from "../../assests/banner.jpg";
import Hero3 from "../../assests/banner.jpg";
import Hero4 from "../../assests/banner.jpg";

const slides = [
  {
    image: Hero1,
    title: "Transportation",
    highlight: "Management",
    description:
      "Reliable freight movement powered by optimized routes, real-time visibility, and scalable transportation solutions.",
    icon: Truck,
    stats: "98%",
    statLabel: "On-Time Deliveries",
    chips: ["FTL", "LTL", "Flat Bed", "Last Mile"],
  },
  {
    image: Hero2,
    title: "Warehousing",
    highlight: "Solutions",
    description:
      "Flexible warehousing infrastructure designed to support inventory growth, fulfillment, and distribution efficiency.",
    icon: Warehouse,
    stats: "24/7",
    statLabel: "Warehouse Operations",
    chips: ["Storage", "Distribution", "Fulfillment", "Cross Docking"],
  },
  {
    image: Hero3,
    title: "Global Freight",
    highlight: "Services",
    description:
      "Integrated air, ocean, and land freight solutions connecting businesses to global markets with confidence.",
    icon: Globe,
    stats: "Global",
    statLabel: "Network Coverage",
    chips: ["Air Freight", "Ocean Freight", "Customs", "International"],
  },
  {
    image: Hero4,
    title: "Supply Chain",
    highlight: "Reliability",
    description:
      "End-to-end logistics strategies focused on resilience, transparency, and long-term operational excellence.",
    icon: ShieldCheck,
    stats: "100%",
    statLabel: "Customized Solutions",
    chips: ["Planning", "Visibility", "Optimization", "Analytics"],
  },
];

export default function HomeHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative pt-[92px] min-h-[calc(100vh-92px)] overflow-hidden bg-[#071120] text-white">
      {/* BACKGROUND SLIDER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#071120]/70" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#071120] via-[#071120]/70 to-[#071120]/20" />
        </motion.div>
      </AnimatePresence>

      {/* GRID OVERLAY */}
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

      {/* ORANGE GLOW */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-[#F5821F]/20 rounded-full blur-[120px]" />

      {/* BLUE GLOW */}
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-[#1D4F91]/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-[1500px] mx-auto min-h-[calc(100vh-92px)] px-6 lg:px-10 flex items-center py-10">
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#F5821F]/30 bg-[#F5821F]/10 text-[#ffb067] font-medium tracking-wide mb-8">
                Going Above & Beyond
              </div>

              {/* HEADING */}
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95]">
                {slide.title}

                <span className="block py-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F5821F] to-[#ffb067] mt-2">
                  {slide.highlight}
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-8 max-w-3xl text-lg lg:text-xl text-white/75 leading-relaxed">
                {slide.description}
              </p>

              {/* CHIPS */}
              <div className="flex flex-wrap gap-3 mt-8">
                {slide.chips.map((chip, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-sm"
                  >
                    {chip}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-5 mt-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-5 rounded-full bg-gradient-to-r from-[#F5821F] to-[#ff9b42] font-semibold hover:scale-105 transition-all duration-300"
                >
                  Contact Us

                  <ArrowUpRight
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT SIDE NAVIGATION */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-5">
        {/* Progress */}
        <div className="relative w-[3px] h-40 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            key={current}
            initial={{ height: "0%" }}
            animate={{ height: "100%" }}
            transition={{
              duration: 3,
              ease: "linear",
            }}
            className="absolute bottom-0 left-0 w-full bg-[#F5821F]"
          />
        </div>

        {/* Dots */}
        <div className="flex flex-col gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 ${
                current === index
                  ? "w-4 h-4 bg-[#F5821F] rounded-full shadow-[0_0_20px_rgba(245,130,31,0.7)]"
                  : "w-3 h-3 bg-white/40 rounded-full hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center">
          <p className="text-[#F5821F] text-lg font-bold">
            {String(current + 1).padStart(2, "0")}
          </p>

          <p className="text-white/40 text-xs mt-1">
            {String(slides.length).padStart(2, "0")}
          </p>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#071120] to-transparent" />
    </section>
  );
}