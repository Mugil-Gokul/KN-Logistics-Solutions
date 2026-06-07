"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B1E35] py-28 lg:py-36">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">
        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* BLUE GLOW */}
        <div className="absolute top-[-200px] right-[-150px] w-[520px] h-[520px] bg-[#1D4F91]/30 blur-[150px] rounded-full" />

        {/* ORANGE GLOW */}
        <div className="absolute bottom-[-200px] left-[-150px] w-[520px] h-[520px] bg-[#F5821F]/25 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* TAG */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#F5821F]" />

          <span className="text-xs tracking-[3px] uppercase text-white/60">
            Contact Us
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 text-5xl md:text-7xl font-black text-white leading-tight"
        >
          Let's Discuss Your
          <span className="block text-[#F5821F]">
            Logistics Requirements
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-6 text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed"
        >
          Whether you require air freight, ocean freight,
          transportation, warehousing, reefer services, or
          last-mile delivery solutions, our team is ready to
          provide reliable logistics support tailored to your
          business needs.
        </motion.p>

        {/* CONTACT CARDS */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:border-[#F5821F]/40 transition"
          >
            <FaPhoneAlt className="text-[#F5821F] text-2xl mx-auto" />

            <h3 className="mt-4 font-semibold text-white">
              Call Us
            </h3>

            <p className="text-white/60 mt-2">
              +1 (647) 313-4191
            </p>

            <p className="text-white/40 text-sm mt-2">
              Speak with our logistics specialists
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:border-[#F5821F]/40 transition"
          >
            <FaEnvelope className="text-[#F5821F] text-2xl mx-auto" />

            <h3 className="mt-4 font-semibold text-white">
              Email Us
            </h3>

            <p className="text-white/60 mt-2 break-all">
              info@knls.ca
            </p>

            <p className="text-white/40 text-sm mt-2">
              Request quotes and logistics support
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:border-[#F5821F]/40 transition"
          >
            <FaMapMarkerAlt className="text-[#F5821F] text-2xl mx-auto" />

            <h3 className="mt-4 font-semibold text-white">
              Business Hours
            </h3>

            <p className="text-white/60 mt-2">
              Monday - Friday
            </p>

            <p className="text-white/40 text-sm mt-2">
              8:30 AM - 5:00 PM
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;