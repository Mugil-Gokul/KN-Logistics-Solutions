import React from "react";
import { FaWarehouse } from "react-icons/fa";

/* TEMPLATE IMPORTS */
import SubServiceLayout from "@/components/SubServiceLayout";
import SubServiceHero from "@/components/SubServiceHero";
import SubServiceOverview from "@/components/SubServiceOverview";
import SubServiceFeatures from "@/components/SubServiceFeatures";
import SubServiceCTA from "@/components/SubServiceCTA";

/* FEATURES */
const features = [
  {
    icon: "📦",
    title: "Cross-Docking Services",
    desc: "Reduce storage time and accelerate deliveries through direct cargo transfer and streamlined distribution operations.",
  },
  {
    icon: "🚛",
    title: "Yard & Shunting Management",
    desc: "Efficient yard movement and on-demand shunting services designed to improve operational flow and cargo handling efficiency.",
  },
  {
    icon: "🏬",
    title: "Flexible Storage Solutions",
    desc: "Secure warehousing facilities and storage trailer options available to support changing shipment requirements.",
  },
  {
    icon: "📊",
    title: "Supply Chain Visibility",
    desc: "Enhanced inventory control and operational transparency for better planning, tracking, and distribution management.",
  },
];

/* HIGHLIGHTS */
const highlights = [
  "Cross-docking operations",
  "Warehouse & distribution support",
  "Storage trailer availability",
  "Shunting & yard management",
  "End-to-end supply chain visibility",
];

const WarehousingAndDistribution = () => {
  return (
    <SubServiceLayout>
      {/* ================= HERO ================= */}
      <SubServiceHero
        icon={<FaWarehouse />}
        title="Warehousing & Distribution"
        subtitle="Storage, Handling & Delivery Solutions"
        desc="Integrated warehousing and distribution services designed to provide secure storage, efficient cargo movement, and complete supply chain visibility from inventory to final delivery."
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
      />

      {/* ================= OVERVIEW ================= */}
      <SubServiceOverview
        title="Complete Warehousing &"
        highlight="Distribution Network"
        desc="With warehousing and distribution services managed under one roof, KN Logistics Solutions helps businesses improve efficiency, reduce transit delays, and maintain greater control over their supply chain operations. From storage and cargo handling to direct distribution support, we deliver flexible solutions tailored to changing business demands."
        points={highlights}
        image="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop"
      />

      {/* ================= FEATURES ================= */}
      <SubServiceFeatures
        title="Why Choose Our Warehousing & Distribution Services"
        subtitle="Flexible storage, efficient cargo flow, and reliable distribution support for modern supply chain operations."
        features={features}
      />

      {/* ================= CTA ================= */}
      <SubServiceCTA
        title="Optimize Your Supply Chain Operations"
        desc="Partner with KN Logistics Solutions for warehousing, distribution, cross-docking, and inventory support services designed to improve efficiency and operational visibility."
        button="Contact Us Today"
      />
    </SubServiceLayout>
  );
};

export default WarehousingAndDistribution;
