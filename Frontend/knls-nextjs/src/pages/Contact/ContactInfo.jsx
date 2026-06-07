"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B1E35] py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* GLOW EFFECTS */}
        <div className="absolute top-[-200px] right-[-150px] w-[500px] h-[500px] bg-[#1D4F91]/30 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-200px] left-[-150px] w-[500px] h-[500px] bg-[#F5821F]/20 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-stretch">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* TAG */}
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#F5821F]" />

              <span className="text-xs uppercase tracking-[3px] text-white/60">
                Contact KN Logistics Solutions
              </span>
            </div>

            {/* TITLE */}
            <h2 className="mt-8 text-5xl md:text-7xl font-black text-white leading-tight">
              Let's Start A
              <span className="block text-[#F5821F]">
                Conversation
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl">
              Whether you need freight forwarding, transportation
              solutions, customs support, warehousing services, or
              supply chain expertise, our team is ready to help.
              Reach out today and discover how KN Logistics Solutions
              can support your business growth.
            </p>

            {/* CONTACT DETAILS */}
            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5821F]/10 border border-[#F5821F]/20 flex items-center justify-center text-[#F5821F]">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-white font-semibold">
                    Phone Number
                  </p>

                  <p className="text-white/60">
                    +1 (647) 313-4191
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5821F]/10 border border-[#F5821F]/20 flex items-center justify-center text-[#F5821F]">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-white font-semibold">
                    Email Address
                  </p>

                  <p className="text-white/60">
                    info@knls.ca
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5821F]/10 border border-[#F5821F]/20 flex items-center justify-center text-[#F5821F]">
                  <FaClock />
                </div>

                <div>
                  <p className="text-white font-semibold">
                    Business Hours
                  </p>

                  <p className="text-white/60">
                    Monday - Friday: 8:30 AM - 5:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5821F]/10 border border-[#F5821F]/20 flex items-center justify-center text-[#F5821F]">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-white font-semibold">
                    Service Area
                  </p>

                  <p className="text-white/60">
                    Canada & International Logistics Solutions
                  </p>
                </div>
              </div>
            </div>

            {/* TRUST CARD */}
            <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <h3 className="text-white text-xl font-bold">
                Why Businesses Choose KNLS
              </h3>

              <div className="mt-5 space-y-3 text-white/60">
                <p>✓ Reliable freight forwarding solutions</p>
                <p>✓ Responsive customer support team</p>
                <p>✓ End-to-end logistics coordination</p>
                <p>✓ Domestic & international shipping expertise</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-[30px] overflow-hidden border border-white/10 shadow-2xl min-h-[650px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop"
              alt="KN Logistics Solutions"
              fill
              priority
              className="object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E35]/90 via-[#0B1E35]/20 to-transparent" />

            {/* FLOATING INFO CARD */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <h3 className="text-white font-bold text-2xl">
                Reliable Logistics Partner
              </h3>

              <p className="text-white/60 mt-3 text-sm leading-relaxed">
                Delivering customized freight forwarding,
                transportation, warehousing, customs brokerage,
                and supply chain solutions tailored to your
                business requirements.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Freight Forwarding",
                  "Transportation",
                  "Warehousing",
                  "Customs Brokerage",
                ].map((service, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 text-xs rounded-full bg-[#F5821F]/10 text-[#F5821F] border border-[#F5821F]/20"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;