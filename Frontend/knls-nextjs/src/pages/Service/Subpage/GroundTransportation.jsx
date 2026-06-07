import React from "react";
import { FaTruckMoving } from "react-icons/fa";

/* TEMPLATE IMPORTS */
import SubServiceLayout from "@/components/SubServiceLayout";
import SubServiceHero from "@/components/SubServiceHero";
import SubServiceOverview from "@/components/SubServiceOverview";
import SubServiceFeatures from "@/components/SubServiceFeatures";
import SubServiceCTA from "@/components/SubServiceCTA";

/* FEATURES */
const features = [
  {
    icon: "🏗️",
    title: "Specialized Flatbed Transportation",
    desc: "Our core transportation solution designed for oversized, heavy-haul, construction, industrial, and project cargo. We provide secure loading, specialized equipment, and dependable delivery for freight that requires open-deck transportation.",
    featured: true,
  },
  {
    icon: "🚚",
    title: "FTL & LTL Transportation",
    desc: "Flexible full-truckload and less-than-truckload solutions supporting regional, long-haul, and dedicated freight requirements.",
  },
  {
    icon: "📦",
    title: "Dry Van Services",
    desc: "Fully enclosed trailers designed to protect cargo from weather, damage, and external environmental conditions.",
  },
  {
    icon: "🚛",
    title: "Specialized Equipment Options",
    desc: "Access to flatbeds, dry vans, and Super B equipment for oversized and high-capacity transportation requirements.",
  },
];

/* HIGHLIGHTS */
const highlights = [
  "Specialized flatbed transportation",
  "FTL & LTL freight solutions",
  "Dry van cargo protection",
  "Real-time shipment tracking",
  "POD & compliance support",
];

const GroundTransportation = () => {
  return (
    <SubServiceLayout>

      {/* ================= HERO ================= */}
      <SubServiceHero
        icon={<FaTruckMoving />}
        title="Ground Transportation"
        subtitle="Flatbed, Freight & Specialized Hauling"
        desc="Comprehensive ground transportation solutions with a strong focus on flatbed transportation, oversized cargo movement, real-time tracking, and dependable freight delivery services."
        image="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop"
      />

      {/* ================= OVERVIEW ================= */}
      <SubServiceOverview
        title="Specialized Ground"
        highlight="Transportation Solutions"
        desc="KN Logistics Solutions provides dependable ground transportation services tailored to a wide range of freight requirements. Our primary expertise lies in flatbed transportation for oversized, project, construction, and industrial cargo requiring specialized handling and equipment. In addition, we support Full Truck Load (FTL), Less Than Truck Load (LTL), and dry van transportation services through a reliable logistics network that ensures safe, efficient, and timely cargo movement. Supported by real-time tracking and operational compliance standards, we deliver visibility and reliability throughout every shipment."
        points={highlights}
        image="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&auto=format&fit=crop"
      />

      {/* ================= FEATURES ================= */}
      <SubServiceFeatures
        title="Why Choose Our Ground Transportation Services"
        subtitle="Industry-focused transportation solutions with specialized flatbed capabilities, flexible equipment options, shipment visibility, and dependable freight delivery."
        features={features}
      />

      {/* ================= CTA ================= */}
      <SubServiceCTA
        title="Need Reliable Flatbed Transportation?"
        desc="Partner with KN Logistics Solutions for specialized flatbed transportation, oversized cargo movement, and dependable freight services backed by experienced logistics professionals."
        button="Request Transportation Support"
      />

    </SubServiceLayout>
  );
};

export default GroundTransportation;