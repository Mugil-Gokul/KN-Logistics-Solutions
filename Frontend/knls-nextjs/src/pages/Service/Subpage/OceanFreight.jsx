import React from "react";
import { FaShip } from "react-icons/fa";

/* TEMPLATE IMPORTS */
import SubServiceLayout from "@/components/SubServiceLayout";
import SubServiceHero from "@/components/SubServiceHero";
import SubServiceOverview from "@/components/SubServiceOverview";
import SubServiceFeatures from "@/components/SubServiceFeatures";
import SubServiceCTA from "@/components/SubServiceCTA";

/* FEATURES */
const features = [
  {
    icon: "🚢",
    title: "Full Container Load (FCL)",
    desc: "Dedicated container solutions for large-volume shipments requiring secure and efficient transportation.",
  },
  {
    icon: "📦",
    title: "Less Than Container Load (LCL)",
    desc: "Cost-effective shipping options that allow multiple consignments to share container space efficiently.",
  },
  {
    icon: "⚙️",
    title: "Special Equipment Cargo",
    desc: "Specialized handling solutions for cargo requiring unique equipment and transportation arrangements.",
  },
  {
    icon: "🏗️",
    title: "Oversized Cargo Management",
    desc: "Professional coordination and transportation support for heavy, oversized, and project cargo shipments.",
  },
];

/* HIGHLIGHTS */
const highlights = [
  "Full Container Load (FCL)",
  "Less Than Container Load (LCL)",
  "Special equipment handling",
  "Oversized cargo transportation",
  "Worldwide ocean freight network",
];

const OceanFreight = () => {
  return (
    <SubServiceLayout>
      {/* ================= HERO ================= */}
      <SubServiceHero
        icon={<FaShip />}
        title="Ocean Freight"
        subtitle="Global Shipping Solutions"
        desc="Reliable ocean freight services designed to handle shipments of all sizes through efficient, secure, and cost-effective international transportation networks."
        image="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2000&auto=format&fit=crop"
      />

      {/* ================= OVERVIEW ================= */}
      <SubServiceOverview
        title="Worldwide Ocean"
        highlight="Transportation"
        desc="KN Logistics Solutions offers comprehensive ocean freight services for businesses moving cargo across international markets. Whether you require Full Container Load (FCL), Less Than Container Load (LCL), special equipment transportation, or oversized cargo solutions, our experienced logistics team ensures efficient cargo movement through trusted global shipping networks."
        points={highlights}
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop"
      />

      {/* ================= FEATURES ================= */}
      <SubServiceFeatures
        title="Why Choose Our Ocean Freight Services"
        subtitle="Flexible shipping solutions supported by global carrier networks and professional cargo management."
        features={features}
      />

      {/* ================= CTA ================= */}
      <SubServiceCTA
        title="Simplify Your International Shipping"
        desc="From standard container shipments to specialized cargo requirements, KN Logistics Solutions delivers dependable ocean freight services tailored to your business needs."
        button="Request A Shipping Solution"
      />
    </SubServiceLayout>
  );
};

export default OceanFreight;
