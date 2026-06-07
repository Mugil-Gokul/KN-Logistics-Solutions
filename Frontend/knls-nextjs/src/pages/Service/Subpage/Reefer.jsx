import React from "react";
import { FaSnowflake } from "react-icons/fa";

/* TEMPLATE IMPORTS */
import SubServiceLayout from "@/components/SubServiceLayout";
import SubServiceHero from "@/components/SubServiceHero";
import SubServiceOverview from "@/components/SubServiceOverview";
import SubServiceFeatures from "@/components/SubServiceFeatures";
import SubServiceCTA from "@/components/SubServiceCTA";

/* FEATURES */
const features = [
  {
    icon: "❄️",
    title: "Temperature-Controlled Transport",
    desc: "Advanced refrigerated vehicles maintain precise temperatures throughout transit.",
  },
  {
    icon: "📍",
    title: "Real-Time Shipment Monitoring",
    desc: "Continuous tracking ensures visibility and control across the entire cold chain.",
  },
  {
    icon: "🥗",
    title: "Perishable Cargo Protection",
    desc: "Ideal for food products, pharmaceuticals, and temperature-sensitive goods.",
  },
  {
    icon: "🚚",
    title: "Reliable Cold Chain Delivery",
    desc: "Consistent temperature management from pickup to final destination.",
  },
];

/* HIGHLIGHTS */
const highlights = [
  "Temperature-controlled transportation",
  "Cold chain logistics management",
  "Perishable goods protection",
  "Real-time shipment visibility",
  "Reliable on-time delivery",
];

const Reefer = () => {
  return (
    <SubServiceLayout>
      {/* ================= HERO ================= */}
      <SubServiceHero
        icon={<FaSnowflake />}
        title="Reefer Transportation"
        subtitle="Temperature-Controlled Logistics"
        desc="Our reefer transportation solutions ensure perishable and temperature-sensitive cargo remains protected throughout transit, maintaining product quality and freshness regardless of weather conditions."
        image="https://images.unsplash.com/photo-1586528116493-9a9f3fddf9df?q=80&w=2000&auto=format&fit=crop"
      />

      {/* ================= OVERVIEW ================= */}
      <SubServiceOverview
        title="Reliable Cold Chain"
        highlight="Transportation Solutions"
        desc="KNLS provides specialized refrigerated transportation services designed to maintain strict temperature requirements throughout the supply chain. From food products to pharmaceuticals, we ensure cargo integrity and compliance every step of the way."
        points={highlights}
        image="https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=1600&auto=format&fit=crop"
      />

      {/* ================= FEATURES ================= */}
      <SubServiceFeatures
        title="Why Choose Reefer Services"
        subtitle="Protecting temperature-sensitive cargo with dependable cold-chain logistics."
        features={features}
      />

      {/* ================= CTA ================= */}
      <SubServiceCTA
        title="Keep Your Cargo Fresh & Protected"
        desc="Partner with KNLS for temperature-controlled transportation solutions that safeguard product quality from origin to destination."
        button="Request Reefer Service"
      />
    </SubServiceLayout>
  );
};

export default Reefer;
