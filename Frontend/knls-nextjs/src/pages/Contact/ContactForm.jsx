"use client";

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous messages
    setSuccess(false);
    setError(false);
    setLoading(true);

    try {
      await axios.post(
        "https://api.hsforms.com/submissions/v3/integration/submit/12345678/a1b2c3d4-e5f6-7890-abcd-123456789xyz",
        {
          fields: [
            {
              name: "company",
              value: formData.companyName,
            },
            {
              name: "firstname",
              value: formData.firstName,
            },
            {
              name: "lastname",
              value: formData.lastName,
            },
            {
              name: "email",
              value: formData.email,
            },
            {
              name: "phone",
              value: formData.phone,
            },
            {
              name: "service",
              value: formData.service,
            },
            {
              name: "message",
              value: formData.message,
            },
          ],
        },
      );

      // Success message
      setSuccess(true);

      // Reset form
      setFormData({
        companyName: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("HubSpot Error:", error);

      // Error message
      setError(true);

      // Hide error message after 5 seconds
      setTimeout(() => {
        setError(false);
      }, 5000);
    } finally {
      // Always stop loading, regardless of success or failure
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F7F8FA] py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #07111D 1px, transparent 1px),
              linear-gradient(to bottom, #07111D 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        <div className="absolute top-[-200px] right-[-150px] w-[500px] h-[500px] bg-[#1D4F91]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] left-[-150px] w-[500px] h-[500px] bg-[#F5821F]/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F5821F]" />
              <span className="text-xs uppercase tracking-[3px] text-slate-500">
                Freight Inquiry
              </span>
            </div>

            <h2 className="mt-8 text-5xl md:text-7xl font-black text-[#07111D] leading-tight">
              Let's Discuss Your
              <span className="block text-[#1D4F91]">
                Logistics Requirements
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-xl">
              Whether you need freight forwarding, transportation, customs
              support, or end-to-end supply chain solutions, our team is ready
              to help move your business forward.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#F5821F]" />
                <span className="text-slate-600">+1 (647) 313-4191</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#F5821F]" />
                <span className="text-slate-600">info@knls.ca</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#F5821F]" />
                <span className="text-slate-600">Ontario, Canada</span>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <p className="text-slate-500 text-sm leading-relaxed">
                ✔ Dedicated logistics support team
                <br />
                ✔ Reliable freight and supply chain solutions
                <br />
                ✔ Fast response during business hours
                <br />✔ Trusted partner for domestic and international shipping
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-[30px] shadow-[0_25px_80px_rgba(0,0,0,0.06)] p-10 lg:p-12"
          >
            <h3 className="text-3xl font-black text-[#07111D]">
              Request a Consultation
            </h3>

            <p className="mt-2 text-slate-500">
              Complete the form below and our team will get back to you shortly.
            </p>

            {/* SUCCESS MESSAGE */}
            {success && (
              <div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 font-medium">
                Your inquiry has been sent successfully. Our team will contact
                you shortly.
              </div>
            )}

            {error && (
              <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 font-medium">
                Something went wrong. Please try again later.
              </div>
            )}

            {/* FORM */}
            <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
              <input
                required
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name *"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[#F5821F]"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  required
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name *"
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[#F5821F]"
                />

                <input
                  required
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[#F5821F]"
                />
              </div>

              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[#F5821F]"
              />

              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number *"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[#F5821F]"
              />

              <select
                required
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[#F5821F]"
              >
                <option value="">Select a Service *</option>
                <option value="Ocean Freight">Ocean Freight</option>
                <option value="Air Freight">Air Freight</option>
                <option value="Ground Transportation">
                  Ground Transportation
                </option>
                <option value="Customs Brokerage">Customs Brokerage</option>
                <option value="Warehousing & Distribution">
                  Warehousing & Distribution
                </option>
                <option value="Supply Chain Solutions">
                  Supply Chain Solutions
                </option>
                <option value="Freight Forwarding">Freight Forwarding</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>

              <textarea
                required
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your logistics requirements *"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[#F5821F]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full bg-[#F5821F] text-white font-semibold hover:bg-[#e67310] transition shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Send Inquiry"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
