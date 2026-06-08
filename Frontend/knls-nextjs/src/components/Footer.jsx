"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";

import Logo from "../assests/Logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const services = [
  {
    name: "Ground Transportation",
    path: "/services/ground-transportation",
  },
  {
    name: "Warehousing & Distribution",
    path: "/services/warehousing-distribution",
  },
  {
    name: "Specialized Services",
    path: "/services/specialized-services",
  },
  {
    name: "Reefer Transportation",
    path: "/services/reefer",
  },
  {
    name: "Last-Mile (B2C) & Mid-Mile (B2B)",
    path: "/services/last-mile-mid-mile",
  },
  {
    name: "Air Freight",
    path: "/services/air-freight",
  },
  {
    name: "Ocean Freight",
    path: "/services/ocean-freight",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050D18] pt-5">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-180px] right-[-100px] w-[420px] h-[420px] bg-[#1D4F91]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[420px] h-[420px] bg-[#F5821F]/10 rounded-full blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
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
        <div className="grid lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] gap-14 py-24">
          {/* COMPANY INFO */}
          <div>
            <Image
              src={Logo}
              width={220}
              height={80}
              alt="KNLS Logo"
              className="h-20 w-auto object-contain"
              priority
            />

            <p className="mt-8 text-white/60 leading-relaxed max-w-md">
              Delivering reliable freight and logistics solutions with global
              connectivity, operational excellence, and modern transportation
              technology.
            </p>

            <div className="flex items-center gap-4 mt-10">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, index) => (
                  <motion.div key={index} whileHover={{ y: -6 }}>
                    <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center hover:bg-[#F5821F] transition-all">
                      <Icon className="text-white/70 text-[20px]" />
                    </div>
                  </motion.div>
                ),
              )}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-2xl font-bold text-white">Quick Links</h3>
            <div className="w-16 h-[2px] bg-[#F5821F] rounded-full mt-5" />

            <ul className="mt-10 space-y-5">
              {quickLinks.map((item, index) => (
                <motion.li key={index} whileHover={{ x: 6 }}>
                  <Link
                    href={item.path}
                    className="flex items-center gap-3 text-white/60 hover:text-white transition-all"
                  >
                    <FaChevronRight className="text-[#F5821F] text-sm" />
                    <span className="text-lg">{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-2xl font-bold text-white">Services</h3>
            <div className="w-16 h-[2px] bg-[#F5821F] rounded-full mt-5" />

            <ul className="mt-10 space-y-5">
              {services.map((item, index) => (
                <motion.li key={index} whileHover={{ x: 6 }}>
                  <Link
                    href={item.path}
                    className="flex items-center gap-3 text-white/60 hover:text-white transition-all"
                  >
                    <FaChevronRight className="text-[#F5821F] text-sm" />
                    <span className="text-lg">{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CONTACT (UNCHANGED) */}
          <div>
            <h3 className="text-2xl font-bold text-white">Contact Info</h3>
            <div className="w-16 h-[2px] bg-[#F5821F] rounded-full mt-5" />

            <div>
              <div className="mt-10 space-y-8">
                {/* PHONE */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5821F]/10 border border-[#F5821F]/20 flex items-center justify-center">
                    <FaPhoneAlt className="text-[#F5821F]" />
                  </div>

                  <div>
                    <p className="text-white/40 uppercase text-sm">
                      Phone Number
                    </p>

                    <h4 className="mt-2 text-white">647-313-4191</h4>
                  </div>
                </div>
                {/* EMAIL */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5821F]/10 border border-[#F5821F]/20 flex items-center justify-center">
                    <FaEnvelope className="text-[#F5821F]" />
                  </div>

                  <div>
                    <p className="text-white/40 uppercase text-sm">
                      Email Address
                    </p>

                    <h4 className="mt-2 text-white break-all">info@knls.ca</h4>
                  </div>
                </div>
                {/* BUSINESS HOURS */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5821F]/10 border border-[#F5821F]/20 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-[#F5821F]" />
                  </div>

                  <div>
                    <p className="text-white/40 uppercase text-sm">
                      Business Hours
                    </p>

                    <h4 className="mt-2 text-white">Monday - Friday</h4>

                    <p className="text-white/60 text-sm mt-1">
                      8:30 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            <p className="text-white/40">
              © 2026 KNLS Logistics. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
