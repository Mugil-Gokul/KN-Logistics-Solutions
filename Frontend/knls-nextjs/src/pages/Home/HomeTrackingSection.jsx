"use client";

import { motion } from "framer-motion";
import { Radar, ShieldCheck, MapPinned, Truck } from "lucide-react";

const trackingFeatures = [
  {
    icon: Radar,
    title: "Live Shipment Updates",
    description:
      "Monitor cargo movement with real-time status updates throughout the shipping journey.",
  },
  {
    icon: MapPinned,
    title: "End-To-End Visibility",
    description:
      "Maintain visibility from pickup to final delivery with clear shipment tracking information.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Tracking Information",
    description:
      "Access accurate shipment updates that support planning and operational decision-making.",
  },
  {
    icon: Truck,
    title: "Delivery Confidence",
    description:
      "Stay informed about shipment progress and estimated delivery timelines every step of the way.",
  },
];

const HomeTrackingSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-150px] right-[-100px] w-[350px] h-[350px] bg-[#1D4F91]/5 rounded-full blur-[120px]" />

        <div className="absolute bottom-[-150px] left-[-100px] w-[350px] h-[350px] bg-[#F5821F]/10 rounded-full blur-[120px]" />

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
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm mb-8"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5821F]" />

            <span className="uppercase tracking-[3px] text-sm text-[#1D4F91] font-medium">
              Real-Time Tracking
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-black text-[#071120]"
          >
            Real-Time Shipment
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1D4F91] to-[#F5821F] py-4">
              Visibility At Every Step
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="mt-8 text-lg leading-relaxed text-slate-600 max-w-3xl mx-auto"
          >
            Stay connected to your cargo throughout its journey with real-time
            shipment tracking and status updates. KN Logistics Solutions
            provides greater visibility, helping you monitor movement,
            anticipate delivery timelines, and stay informed every step of the
            way.
          </motion.p>
        </div>

        {/* MAIN SECTION */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 mt-20">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#071120] via-[#0B1E35] to-[#102847] p-10 lg:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#F5821F]/10 rounded-full blur-[120px]" />

            <div className="relative">
              <div className="w-24 h-24 rounded-[30px] bg-[#F5821F]/10 border border-[#F5821F]/20 flex items-center justify-center">
                <Radar size={48} className="text-[#F5821F]" />
              </div>

              <h3 className="mt-10 text-5xl lg:text-6xl font-black text-white leading-tight">
                Track Your
                <span className="block text-[#F5821F]">Shipment Anytime</span>
              </h3>

              <p className="mt-8 text-lg text-white/65 leading-relaxed max-w-xl">
                Keep an eye on your cargo so you always know where it is and
                when it is expected to arrive. Our real-time tracking
                capabilities provide greater visibility and peace of mind
                throughout the shipping process.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-12">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-white/50 text-sm uppercase tracking-[2px]">
                    Visibility
                  </p>

                  <h4 className="text-white text-xl font-bold mt-3">
                    Real-Time Updates
                  </h4>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-white/50 text-sm uppercase tracking-[2px]">
                    Tracking
                  </p>

                  <h4 className="text-white text-xl font-bold mt-3">
                    End-To-End Monitoring
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="grid sm:grid-cols-2 gap-6">
            {trackingFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F5821F]/5 to-[#1D4F91]/5" />
                  </div>

                  <div className="relative">
                    <div className="w-20 h-20 rounded-3xl bg-[#071120] flex items-center justify-center mb-8">
                      <Icon className="text-[#F5821F]" size={30} />
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm uppercase tracking-[3px] text-[#F5821F]">
                        0{index + 1}
                      </span>

                      <div className="w-12 h-[1px] bg-[#F5821F]/40" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#071120] leading-tight">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTrackingSection;
