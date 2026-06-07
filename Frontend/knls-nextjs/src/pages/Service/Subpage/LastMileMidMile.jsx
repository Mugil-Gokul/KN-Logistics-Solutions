import React from "react";
import { FaShippingFast } from "react-icons/fa";

/* TEMPLATE IMPORTS */
import SubServiceLayout from "@/components/SubServiceLayout";
import SubServiceHero from "@/components/SubServiceHero";
import SubServiceOverview from "@/components/SubServiceOverview";
import SubServiceFeatures from "@/components/SubServiceFeatures";
import SubServiceCTA from "@/components/SubServiceCTA";

/* FEATURES */
const features = [
  {
    icon: "🏠",
    title: "Last-Mile Delivery",
    desc: "Reliable B2C delivery solutions ensuring products reach customers quickly and efficiently.",
  },
  {
    icon: "🏢",
    title: "Mid-Mile Distribution",
    desc: "Seamless B2B transportation connecting warehouses, distribution centers, and business locations.",
  },
  {
    icon: "🔧",
    title: "Installation & Assembly",
    desc: "Professional setup and assembly services to deliver a complete customer experience.",
  },
  {
    icon: "📦",
    title: "Customer-Focused Fulfillment",
    desc: "End-to-end delivery management designed to improve satisfaction and operational efficiency.",
  },
];

/* HIGHLIGHTS */
const highlights = [
  "B2C last-mile delivery services",
  "B2B mid-mile transportation",
  "Installation and assembly support",
  "Enhanced customer experience",
  "Reliable delivery execution",
];

const LastMileMidMile = () => {
  return (
    <SubServiceLayout>
      {/* ================= HERO ================= */}
      <SubServiceHero
        icon={<FaShippingFast />}
        title="Last-Mile & Mid-Mile Delivery"
        subtitle="Customer-Centric Transportation"
        desc="From final-mile residential deliveries to business-to-business distribution, KNLS provides dependable transportation solutions that ensure products arrive safely, efficiently, and with exceptional customer service."
        image="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2000&auto=format&fit=crop"
      />

      {/* ================= OVERVIEW ================= */}
      <SubServiceOverview
        title="End-to-End Delivery"
        highlight="Solutions"
        desc="Our last-mile and mid-mile transportation services bridge the gap between distribution centers, businesses, and end customers. From drop-offs to full installation and assembly, we ensure every delivery reflects the highest standards of professionalism and reliability."
        points={highlights}
        image="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&auto=format&fit=crop"
      />

      {/* ================= FEATURES ================= */}
      <SubServiceFeatures
        title="Why Choose Our Delivery Services"
        subtitle="Creating seamless experiences for both business and consumer deliveries."
        features={features}
      />

      {/* ================= CTA ================= */}
      <SubServiceCTA
        title="Deliver Better Customer Experiences"
        desc="Partner with KNLS for dependable last-mile and mid-mile logistics solutions tailored to your business needs."
        button="Request Delivery Solution"
      />
    </SubServiceLayout>
  );
};

export default LastMileMidMile;
