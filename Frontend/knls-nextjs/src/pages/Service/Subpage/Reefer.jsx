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
    icon: "🥬",
    title: "Produce Transportation",
    desc: "We support temperature-controlled transportation for produce and perishable goods that require careful handling, consistent refrigeration, and dependable transit conditions. Our reefer solutions help businesses move fresh products while maintaining quality and freshness throughout the transportation process.",
    featured: true,
  },
  {
    icon: "❄️",
    title: "Cold Chain Support",
    desc: "Our reefer transportation services are designed to support cold chain requirements from pickup through delivery. By helping maintain appropriate temperature conditions throughout transit, we assist customers in protecting product integrity and reducing spoilage risk.",
  },
  {
    icon: "📡",
    title: "Shipment Visibility",
    desc: "Real-time shipment visibility, communication, and transportation updates help customers stay informed while temperature-sensitive cargo is in transit. Our team provides proactive coordination to support operational efficiency and delivery confidence.",
  },
  {
    icon: "🚚",
    title: "Reliable Delivery Execution",
    desc: "Time-sensitive refrigerated freight requires dependable scheduling and transportation planning. KN Logistics Solutions helps coordinate reefer shipments with a focus on delivery performance, consistency, and customer requirements.",
  },
];

/* HIGHLIGHTS */
const highlights = [
  "Temperature-controlled transportation",
  "Produce and perishable freight support",
  "Reefer logistics coordination",
  "Cold chain shipment visibility",
  "Freshness-focused transportation solutions",
  "Reliable refrigerated delivery services",
];

const Reefer = () => {
  return (
    <SubServiceLayout>
      {/* ================= HERO ================= */}
      <SubServiceHero
        icon={<FaSnowflake />}
        title="Reefer Transportation Services"
        subtitle="Temperature-Controlled Transport for Produce & Perishable Freight"
        desc="KN Logistics Solutions provides reefer transportation services for temperature-sensitive shipments, with a primary focus on produce and perishable freight. Our refrigerated transport solutions help maintain product quality, protect cargo integrity, and support dependable delivery from pickup to final destination."
        image="https://images.unsplash.com/photo-1586528116493-9a9f3fddf9df?q=80&w=2000&auto=format&fit=crop"
      />

      {/* ================= OVERVIEW ================= */}
      <SubServiceOverview
        tag="Reefer Transportation"
        title="Temperature-Controlled"
        highlight="Transportation Solutions"
        intro="Reliable refrigerated transportation services designed to help businesses move produce, perishable goods, and temperature-sensitive freight while maintaining product quality throughout transit."
        description={`Temperature-sensitive freight requires more than standard transportation. It requires planning, visibility, and dependable equipment to help maintain the required environment throughout the transportation process. KN Logistics Solutions supports businesses moving produce, food products, and other perishable goods through reliable reefer transportation services.

Our temperature-controlled logistics solutions are designed to help protect freshness, reduce spoilage risk, and support delivery performance for time-sensitive cargo. Whether moving regional produce shipments, refrigerated food products, or longer-haul temperature-controlled freight, we help coordinate transportation that aligns with your product requirements and delivery schedule.

Through dependable reefer transportation, shipment visibility, and operational coordination, we help customers maintain confidence in the movement of temperature-sensitive freight. Our focus is on supporting product integrity, transportation reliability, and efficient delivery execution from pickup through final destination.`}
        points={highlights}
        image="https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=1600&auto=format&fit=crop"
      />

      {/* ================= FEATURES ================= */}
      <SubServiceFeatures
        title="Cold Chain & Refrigerated Transportation Support"
        subtitle="From produce transportation and cold chain coordination to shipment visibility and reliable refrigerated delivery, our reefer services are designed to help businesses move temperature-sensitive freight with confidence."
        features={features}
      />

      {/* ================= CTA ================= */}
      <SubServiceCTA
        title="Need Reliable Reefer Transportation Services?"
        desc="Partner with KN Logistics Solutions for temperature-controlled transportation, produce freight support, refrigerated logistics coordination, and dependable cold chain delivery solutions designed to protect your cargo every step of the way."
        button="Request Reefer Transportation Support"
      />
    </SubServiceLayout>
  );
};

export default Reefer;