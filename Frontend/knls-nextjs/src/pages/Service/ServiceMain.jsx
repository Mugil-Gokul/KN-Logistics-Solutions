"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaTruckMoving,
  FaRoute,
  FaWarehouse,
  FaShippingFast,
  FaArrowRight,
  FaBoxes,
  FaShip,
} from "react-icons/fa";

const services = [
  {
    title: "Air Freight",
    icon: FaShippingFast,
    number: "01",
    desc: "Fast and reliable air freight solutions for time-sensitive shipments, ensuring secure cargo movement through an extensive global airline network.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop",
    link: "/services/air-freight",
  },
  {
    title: "Ocean Freight",
    icon: FaShip,
    number: "02",
    desc: "Comprehensive ocean freight services providing cost-effective international shipping solutions for full-container and less-than-container cargo.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop",
    link: "/services/ocean-freight",
  },
  {
    title: "Ground Transportation",
    icon: FaTruckMoving,
    number: "03",
    desc: "Efficient road transportation services designed to ensure dependable cargo delivery across regional and cross-border supply chains.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop",
    link: "/services/ground-transportation",
  },
  {
    title: "Warehousing & Distribution",
    icon: FaWarehouse,
    number: "04",
    desc: "Modern warehousing and distribution solutions with inventory management, order fulfillment, and seamless supply chain support.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop",
    link: "/services/warehousing-distribution",
  },
  {
    title: "Reefer Logistics",
    icon: FaBoxes,
    number: "05",
    desc: "Temperature-controlled logistics services for perishable and sensitive cargo, maintaining product integrity throughout transit.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    link: "/services/reefer",
  },
  {
    title: "Last-Mile (B2C) & Mid-Mile (B2B)",
    icon: FaRoute,
    number: "06",
    desc: "Specialized delivery solutions connecting distribution centers, businesses, and end customers with speed, visibility, and reliability.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1600&auto=format&fit=crop",
    link: "/services/last-mile-mid-mile",
  },
];

const ServiceMain = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F8FA] py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #07111D 1px, transparent 1px),
              linear-gradient(to bottom, #07111D 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-[#F5821F]/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] bg-[#1D4F91]/10 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#F5821F]" />
              <span className="uppercase tracking-[4px] text-xs text-slate-500">
                Logistics Solutions
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-8 text-5xl md:text-7xl lg:text-[90px] font-black leading-[0.92] text-[#07111D]"
            >
              Comprehensive
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F5821F] via-[#ff9f45] to-[#ffbc7d]">
                Logistics Solutions
              </span>
              <span className="block">For Global Trade</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl text-lg leading-relaxed text-slate-500"
          >
            KNLS provides integrated logistics solutions across air freight,
            ocean freight, ground transportation, warehousing, reefer logistics,
            and last-mile delivery. Backed by over 20 years of industry
            expertise, we help businesses move cargo efficiently through
            reliable and scalable supply chain solutions.
          </motion.p>
        </div>

        {/* SERVICES */}
        <div className="mt-24 space-y-8">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.12 }}
                className="group relative overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.05)]"
              >
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center">
                  {/* LEFT */}
                  <div className="relative p-8 lg:p-12">
                    <span className="absolute top-8 right-8 text-8xl font-black text-slate-100">
                      {item.number}
                    </span>

                    <div className="w-20 h-20 rounded-3xl border border-[#F5821F]/10 bg-[#FFF4EA] flex items-center justify-center text-[#F5821F] text-3xl">
                      <Icon />
                    </div>

                    <h3 className="mt-10 text-4xl lg:text-5xl font-black text-[#07111D]">
                      {item.title}
                    </h3>

                    <div className="w-20 h-[3px] bg-[#F5821F] rounded-full mt-6" />

                    <p className="mt-8 text-lg text-slate-500 max-w-2xl">
                      {item.desc}
                    </p>

                    <div className="flex items-center justify-between mt-10 pt-8 border-t border-slate-200">
                      <Link
                        href={item.link}
                        className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-[#F5821F] group-hover:text-white group-hover:border-[#F5821F] transition-all duration-300"
                      >
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="relative h-full min-h-[400px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceMain;