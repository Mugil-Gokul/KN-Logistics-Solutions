"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Logo from "../assests/Logo.png";
import Image from "next/image";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },

  {
    name: "Services",
    link: "/services",
    dropdown: [
      {
        name: "Air Freight",
        link: "/services/air-freight",
      },
      {
        name: "Ocean Freight",
        link: "/services/ocean-freight",
      },
      {
        name: "Ground Transportation",
        link: "/services/ground-transportation",
      },
      {
        name: "Warehousing & Distribution",
        link: "/services/warehousing-distribution",
      },
      {
        name: "Reefer Transportation",
        link: "/services/reefer",
      },
      {
        name: "Last-Mile (B2C) & Mid-Mile (B2B)",
        link: "/services/last-mile-mid-mile",
      },
    ],
  },

  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#081120]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="h-[92px] flex items-center justify-between">
            {/* LOGO */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative flex items-center gap-3 group"
            >
              <Link href="/" className="relative overflow-hidden">
                <Image
                  src={Logo}
                  alt="KNLS Logo"
                  width={180}
                  height={64}
                  className="h-14 lg:h-16 w-auto object-contain relative z-10"
                  priority
                />
                <div className="absolute inset-0 bg-[#F5821F]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </Link>
            </motion.div>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full px-3 py-2">
                {navLinks.map((item, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() =>
                      item.dropdown && setActiveDropdown(index)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="relative px-5 py-3 rounded-full text-[15px] font-medium text-white flex items-center gap-1.5 transition-all duration-300 hover:text-[#F5821F]"
                    >
                      <Link
                        href={item.link}
                        className="flex items-center gap-1.5"
                      >
                        {item.name}
                        {item.dropdown && (
                          <ChevronDown size={16} className="mt-[1px]" />
                        )}
                      </Link>

                      <motion.span
                        initial={{ width: 0 }}
                        whileHover={{ width: "70%" }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-[#F5821F] rounded-full"
                      />
                    </motion.div>

                    {/* DROPDOWN */}
                    <AnimatePresence>
                      {activeDropdown === index && item.dropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.25 }}
                          className="absolute top-[75px] left-0 w-[260px] bg-[#0B1E35]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 shadow-2xl"
                        >
                          <div className="space-y-1">
                            {item.dropdown.map((service, idx) => (
                              <motion.div
                                whileHover={{ x: 6 }}
                                key={idx}
                                className="flex items-center justify-between px-4 py-3 rounded-2xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
                              >
                                <Link href={service.link} className="w-full">
                                  {service.name}
                                </Link>

                                <ArrowUpRight size={16} />
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="ml-4"
              >
                <Link
                  href="/contact"
                  className="relative overflow-hidden rounded-full flex items-center gap-2 px-7 py-4 text-white font-semibold tracking-wide bg-gradient-to-r from-[#F5821F] to-[#ff9d47]"
                >
                  <span>Get Quote</span>

                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* MOBILE */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-12 h-12 rounded-2xl bg-white/10 border border-white/10 text-white flex items-center justify-center backdrop-blur-xl"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F5821F]/60 to-transparent" />
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#081120] lg:hidden"
          >
            <div className="pt-28 px-6 space-y-3">
              {navLinks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-5 text-white text-lg font-medium"
                >
                  <Link
                    href={item.link}
                    className="w-full flex justify-between"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="group-hover:text-[#F5821F] transition-colors">
                      {item.name}
                    </span>

                    <ArrowUpRight
                      size={20}
                      className="group-hover:rotate-45 transition-transform"
                    />
                  </Link>
                </motion.div>
              ))}

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full mt-8 rounded-3xl overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5821F] to-[#ff9d47]" />
                <div className="relative py-5 text-white font-semibold text-lg">
                  <Link href="/contact" className="w-full block">
                    Get Free Quote
                  </Link>
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
