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
    icon: "🚛",
    title: "Wide Load & Oversized Load Transportation",
    desc: "We support wide load and oversized load transportation for freight that requires careful planning, specialized equipment, and reliable coordination. Our logistics team helps manage transportation requirements for large, heavy, or irregular cargo moving across regional and long-haul routes.",
    featured: true,
  },
  {
    icon: "🪵",
    title: "Rolltite Trailers for Lumber & Steel",
    desc: "For lumber, steel, and other freight requiring side-loading flexibility with added cargo protection, KN Logistics Solutions offers Rolltite trailer solutions. These trailers help protect freight from weather exposure while supporting efficient loading and unloading while maintaining transportation efficiency.",
  },
  {
    icon: "🏗️",
    title: "Low-Pro & RGN Trailer Support",
    desc: "Heavy machinery and equipment often require low-profile or removable gooseneck trailer options. KN Logistics Solutions supports low-pro and RGN transportation requirements for machinery, industrial equipment, agricultural equipment, and project cargo that needs specialized loading access and lower deck height.",
  },
  {
    icon: "🏭",
    title: "Construction & Industrial Freight",
    desc: "We support construction companies, manufacturers, industrial suppliers, and project teams with freight services designed for demanding cargo. From building materials and steel products to large equipment movement, our transportation solutions are tailored to site schedules, load requirements, and delivery timelines.",
  },
  {
    icon: "🚚",
    title: "FTL & Dedicated Transportation",
    desc: "In addition to specialized hauling, we provide Full Truck Load (FTL) and dedicated transportation services for businesses requiring consistent capacity, route reliability, and dependable freight movement across regional and long-haul transportation lanes.",
  },
  {
    icon: "📡",
    title: "Reliable Shipment Visibility",
    desc: "Our ground transportation services are supported by communication, shipment tracking, documentation workflows, and operational coordination that help customers stay informed throughout every stage of the transportation process.",
  },
];

/* HIGHLIGHTS */
const highlights = [
  "Flatbed transportation for open-deck freight",
  "Wide load and oversized cargo support",
  "Rolltite trailers for lumber and steel",
  "Low-pro and RGN trailer options",
  "Heavy machinery transportation solutions",
  "Construction and industrial freight support",
  "FTL, LTL, and dedicated freight services",
  "Shipment visibility and operational coordination",
];

const GroundTransportation = () => {
  return (
    <SubServiceLayout>
      {/* ================= HERO ================= */}
      <SubServiceHero
        icon={<FaTruckMoving />}
        title="Ground Transportation & Flatbed Freight Services"
        subtitle="Flatbeds, Oversized Loads, Heavy Machinery & Specialized Hauling"
        desc="KN Logistics Solutions provides dependable ground transportation services with specialized support for flatbed freight, wide loads, oversized cargo, lumber, steel, construction materials, and heavy machinery. With flexible equipment options and experienced logistics coordination, we help businesses move complex freight safely, efficiently, and on schedule."
        image="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop"
      />

      {/* ================= OVERVIEW ================= */}
      <SubServiceOverview
        tag="Ground Transportation"
        title="Ground Transportation"
        highlight="Built For Complex Freight"
        intro="From oversized loads and heavy machinery to industrial freight and construction materials, KN Logistics Solutions provides specialized transportation solutions designed to move complex cargo safely, efficiently, and with complete operational visibility."
        description={`KN Logistics Solutions supports a wide range of ground transportation requirements, from standard freight movement to highly specialized open-deck hauling solutions. Our transportation services are designed for businesses that need dependable freight movement, flexible equipment options, and reliable logistics coordination across regional and long-haul routes.

Flatbed transportation remains one of our core service offerings, supporting freight that cannot be transported through traditional enclosed trailers. We regularly move oversized cargo, wide loads, industrial freight, construction materials, steel products, lumber shipments, and heavy machinery that require specialized handling and transportation planning.

For customers with unique cargo requirements, we coordinate specialized equipment options including standard flatbeds, Rolltite trailers, low-profile trailers, and removable gooseneck (RGN) trailers. Whether freight requires weather-sensitive protection, side-loading flexibility, open-deck access, or heavy-haul transportation planning, our team helps identify the most effective transportation solution for each shipment.

In addition to specialized hauling services, KN Logistics Solutions supports Full Truck Load (FTL), Less Than Truck Load (LTL), and dedicated freight transportation requirements. Through proactive communication, shipment visibility, and operational coordination, we help businesses move freight safely, efficiently, and with confidence throughout every stage of the transportation process.`}
        points={highlights}
        image="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&auto=format&fit=crop"
      />

      {/* ================= FEATURES ================= */}
      <SubServiceFeatures
        title="Ground Transportation Solutions Designed For Specialized Freight"
        subtitle="Supporting oversized cargo, heavy equipment, industrial freight, construction materials, lumber, steel, and project shipments through specialized transportation planning, equipment selection, and dependable logistics execution."
        features={features}
      />

      {/* ================= CTA ================= */}
      <SubServiceCTA
        title="Looking For Reliable Flatbed & Heavy Haul Transportation?"
        desc="Whether you need flatbed transportation, oversized load support, heavy machinery hauling, Rolltite trailer solutions, or dedicated freight services, our team is ready to provide the equipment, planning, and logistics expertise needed to keep your cargo moving safely and efficiently."
        button="Request Ground Transportation Support"
      />
    </SubServiceLayout>
  );
};

export default GroundTransportation;
