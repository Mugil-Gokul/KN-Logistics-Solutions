"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import {
  Ship,
  Globe2,
  Container,
  ShieldCheck,
  ArrowUpRight,
  MapPinned,
  Zap,
} from "lucide-react";

const freightServices = [
  {
    icon: Container,
    title: "Ground Transportation",
    description:
      "Comprehensive road transport solutions connecting businesses through efficient regional, national, and cross-border delivery networks.",
    number: "01",
    path: "/services/ground-transportation",
  },
  {
    icon: ShieldCheck,
    title: "Warehousing & Distribution",
    description:
      "Integrated storage and distribution services that improve inventory visibility, operational efficiency, and supply chain performance.",
    number: "02",
    path: "/services/warehousing-distribution",
  },
  {
    icon: MapPinned,
    title: "Specialized Logistics Services",
    description:
      "Beyond standard freight movement, KN Logistics Solutions provides specialized logistics support for businesses that require flexible, site-specific, or time-sensitive transportation services.",
    number: "03",
    path: "/services/specialized-services",
    cta: "Explore Specialized Services",
  },
  {
    icon: ShieldCheck,
    title: "Reefer Transportation",
    description:
      "Our reefer transportation services are designed for temperature-sensitive freight, with a strong focus on produce and perishable goods. KN Logistics Solutions helps maintain cargo quality from pickup to delivery through reliable refrigerated transport and shipment visibility.",
    number: "04",
    path: "/services/reefer",
    cta: "Request Reefer Service",
  },

  {
    icon: MapPinned,
    title: "Last-Mile & Mid-Mile Delivery",
    description:
      "Reliable fulfillment and delivery services that connect products to businesses and consumers with a seamless customer experience.",
    number: "05",
    path: "/services/last-mile-mid-mile",
  },
  {
    icon: Globe2,
    title: "Air Freight",
    description:
      "Fast and dependable air transportation solutions designed to keep critical shipments moving efficiently across domestic and international markets.",
    number: "06",
    path: "/services/air-freight",
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    description:
      "Flexible sea freight services supporting containerized, project, and specialized cargo with reliable global connectivity.",
    number: "07",
    path: "/services/ocean-freight",
  },
];

const HomeServices = () => {
  return (
    <section className="relative overflow-hidden bg-[#071120] py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* GLOW */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-200px] left-[-100px] w-[450px] h-[450px] bg-[#1D4F91]/20 rounded-full blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 50, 0],
            y: [0, 50, -30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-200px] right-[-100px] w-[450px] h-[450px] bg-[#F5821F]/10 rounded-full blur-[120px]"
        />

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
        {/* TOP CONTENT */}
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
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 80,
              filter: "blur(15px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
            }}
            className="text-5xl lg:text-6xl font-black leading-[1.05] text-white"
          >
            Specialized Freight Solutions
            <span className="block py-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F5821F] to-[#ffb067]">
              For Complex Supply Chains
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-8 text-lg leading-relaxed text-white/60 max-w-3xl"
          >
            KN Logistics Solutions supports businesses with reliable freight
            transportation, specialized equipment, temperature-controlled
            logistics, and value-added supply chain services. From oversized
            flatbed loads and refrigerated produce shipments to final mile
            delivery, drayage, shunting, and transloading, our team helps move
            cargo safely, efficiently, and on schedule.
          </motion.p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 mt-20">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {freightServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{
                    x: 15,
                    scale: 1.02,
                  }}
                  className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 lg:p-10 transition-all duration-500 hover:border-[#F5821F]/30"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-[radial-gradient(circle_at_center,rgba(245,130,31,0.12),transparent_70%)]" />

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F5821F]/10 to-transparent" />
                  </div>

                  <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                    <div className="flex gap-6">
                      <motion.div
                        animate={{
                          y: [0, -8, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                        className="w-20 h-20 rounded-3xl bg-[#F5821F]/10 border border-[#F5821F]/20 flex items-center justify-center"
                      >
                        <Icon className="text-[#F5821F]" size={34} />
                      </motion.div>

                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-[#F5821F] text-sm tracking-[3px] uppercase">
                            {service.number}
                          </span>

                          <div className="w-12 h-[1px] bg-[#F5821F]/40" />
                        </div>

                        <h3 className="text-3xl font-bold text-white">
                          {service.title}
                        </h3>

                        <p className="mt-5 text-white/60 leading-relaxed max-w-2xl">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <Link href={service.path}>
                      <motion.button
                        whileHover={{
                          rotate: 45,
                          scale: 1.15,
                          boxShadow: "0px 0px 35px rgba(245,130,31,0.45)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="w-16 h-16 rounded-2xl bg-[#F5821F] flex items-center justify-center shadow-2xl flex-shrink-0"
                      >
                        <ArrowUpRight className="text-white" size={26} />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 min-h-[850px]"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            >
              <Image
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop"
                alt="freight"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 40vw"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-[#071120]/40 to-transparent" />

            <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
              <div>
                <h3 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                  End-To-End Supply Chain Support
                </h3>

                <p className="mt-6 text-white/65 leading-relaxed max-w-lg">
                  From international freight movements to warehousing and final
                  delivery, our solutions are designed to provide visibility,
                  efficiency, and reliability throughout the logistics journey.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-10">
                  <div>
                    <h4 className="text-5xl font-black text-white">7+</h4>

                    <p className="mt-2 text-white/50 uppercase text-sm">
                      Core Services
                    </p>
                  </div>

                  <div>
                    <h4 className="text-5xl font-black text-white">Global</h4>

                    <p className="mt-2 text-white/50 uppercase text-sm">
                      Network Reach
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
