"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaShip,
  FaGlobeAmericas,
  FaChartLine,
  FaBoxes,
} from "react-icons/fa";

const AboutOverview = () => {
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
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute top-[-200px] left-[-100px] w-[450px] h-[450px] bg-[#F5821F]/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-[-200px] right-[-100px] w-[450px] h-[450px] bg-[#1D4F91]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-10">
        {/* TOP */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#F5821F]" />

            <span className="uppercase tracking-[3px] text-sm text-slate-500">
              Company Overview
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="mt-8 text-5xl lg:text-7xl font-black leading-[1] text-[#07111D]"
          >
            Building Smarter
            <span className="block py-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F5821F] to-[#ff9f45]">
              Global Supply Chains
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="mt-10 text-lg lg:text-xl leading-relaxed text-slate-500 max-w-3xl"
          >
            KNLS delivers dependable freight and supply chain solutions through
            a proven transportation network, helping businesses move cargo
            efficiently across domestic and international markets with
            flexibility, scalability, and exceptional service.
          </motion.p>
        </div>

        {/* SECTION 1 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-28">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
              <Image
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop"
                alt="company story"
                width={1600}
                height={900}
                className="w-full h-[550px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-3xl bg-[#FFF2E5] border border-[#F5821F]/10 flex items-center justify-center text-[#F5821F] text-3xl">
              <FaShip />
            </div>

            <h3 className="mt-8 text-4xl lg:text-5xl font-black text-[#07111D]">
              Transportation Excellence
            </h3>

            <div className="w-20 h-[3px] bg-[#F5821F] rounded-full mt-6" />

            <p className="mt-8 text-lg leading-relaxed text-slate-500">
              KN Logistics Solutions has built a strong reputation for delivering
reliable transportation and freight management services that adapt to
the evolving needs of modern businesses. From flatbed transportation
and specialized freight to temperature-controlled shipments and
time-sensitive deliveries, our team focuses on creating solutions that
prioritize efficiency, visibility, and dependability. By combining
industry expertise with a customer-first approach, we help businesses
overcome transportation challenges while ensuring freight arrives
safely and on schedule.
            </p>
          </motion.div>
        </div>

        {/* SECTION 2 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-32">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:order-1 order-2"
          >
            <div className="w-20 h-20 rounded-3xl bg-[#FFF2E5] border border-[#F5821F]/10 flex items-center justify-center text-[#F5821F] text-3xl">
              <FaChartLine />
            </div>

            <h3 className="mt-8 text-4xl lg:text-5xl font-black text-[#07111D]">
              8+ Years Of Experience
            </h3>

            <div className="w-20 h-[3px] bg-[#F5821F] rounded-full mt-6" />

            <p className="mt-8 text-lg leading-relaxed text-slate-500">
              With more than 8 years of experience in transportation and supply
chain management, KN Logistics Solutions has successfully supported
businesses across a variety of industries, including construction,
manufacturing, retail, agriculture, and industrial operations. Our
experience allows us to understand the unique challenges associated
with different types of freight and supply chain requirements. This
knowledge enables us to provide practical, flexible, and reliable
solutions that help customers improve efficiency while reducing
transportation complexity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:order-2 order-1"
          >
            <div className="overflow-hidden rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
              <Image
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&auto=format&fit=crop"
                alt="experience"
                width={1600}
                height={900}
                className="w-full h-[550px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* SECTION 3 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-32">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
              <Image
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                alt="global presence"
                width={1600}
                height={900}
                className="w-full h-[550px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-3xl bg-[#FFF2E5] border border-[#F5821F]/10 flex items-center justify-center text-[#F5821F] text-3xl">
              <FaGlobeAmericas />
            </div>

            <h3 className="mt-8 text-4xl lg:text-5xl font-black text-[#07111D]">
              Global Freight Network
            </h3>

            <div className="w-20 h-[3px] bg-[#F5821F] rounded-full mt-6" />

            <p className="mt-8 text-lg leading-relaxed text-slate-500">
              Our extensive freight network connects businesses with dependable
transportation solutions across regional, national, and international
markets. Through strong relationships with carriers, logistics
partners, and transportation providers, we are able to coordinate
freight movement efficiently while maintaining visibility throughout
the shipping process. Whether supporting domestic transportation,
cross-border shipments, or specialized logistics requirements, we
remain focused on delivering consistent service and operational
reliability.
            </p>
          </motion.div>
        </div>

        {/* SECTION 4 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-32">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:order-1 order-2"
          >
            <div className="w-20 h-20 rounded-3xl bg-[#FFF2E5] border border-[#F5821F]/10 flex items-center justify-center text-[#F5821F] text-3xl">
              <FaBoxes />
            </div>

            <h3 className="mt-8 text-4xl lg:text-5xl font-black text-[#07111D]">
              Customer Service & Safety
            </h3>

            <div className="w-20 h-[3px] bg-[#F5821F] rounded-full mt-6" />

            <p className="mt-8 text-lg leading-relaxed text-slate-500">
              At KN Logistics Solutions, customer satisfaction and safety remain at
the center of everything we do. We believe successful logistics
partnerships are built on trust, communication, and consistent
performance. Our team is committed to maintaining safe operating
practices, supporting driver and employee well-being, and delivering
responsive customer service throughout every stage of the logistics
process. By focusing on long-term relationships and continuous
improvement, we help customers achieve dependable transportation
outcomes they can rely on.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:order-2 order-1"
          >
            <div className="overflow-hidden rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
              <Image
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1600&auto=format&fit=crop"
                alt="customer service"
                width={1600}
                height={900}
                className="w-full h-[550px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;