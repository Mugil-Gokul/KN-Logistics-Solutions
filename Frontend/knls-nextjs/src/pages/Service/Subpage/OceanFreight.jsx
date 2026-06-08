import React from "react";
import { FaShip } from "react-icons/fa";

/* TEMPLATE IMPORTS */
import SubServiceLayout from "@/components/SubServiceLayout";
import SubServiceHero from "@/components/SubServiceHero";
import SubServiceOverview from "@/components/SubServiceOverview";
import SubServiceFeatures from "@/components/SubServiceFeatures";
import SubServiceCTA from "@/components/SubServiceCTA";

/* ================= FEATURES ================= */
const features = [
  {
    icon: "🚢",
    title: "Full Container Load (FCL)",
    desc: "Dedicated container solutions for businesses moving large shipment volumes. FCL services provide greater cargo security, direct transportation, and efficient handling for import and export operations.",
  },
  {
    icon: "📦",
    title: "Less Than Container Load (LCL)",
    desc: "Cost-effective ocean freight solutions that allow multiple shipments to share container space. LCL services help businesses reduce transportation costs while maintaining access to global shipping routes.",
  },
  {
    icon: "⚙️",
    title: "Special Equipment Cargo",
    desc: "Specialized transportation support for cargo requiring unique equipment, handling procedures, or shipping arrangements. We help coordinate solutions that align with specific freight requirements.",
  },
  {
    icon: "🏗️",
    title: "Oversized & Project Cargo",
    desc: "Professional planning and coordination for oversized, heavy-lift, and project cargo shipments. Our team helps manage complex transportation requirements across international shipping networks.",
  },
  {
    icon: "🌍",
    title: "Global Carrier Network",
    desc: "Access to trusted ocean carriers and international shipping routes across major global markets, helping businesses move freight efficiently through established trade lanes.",
  },
  {
    icon: "📍",
    title: "Shipment Visibility & Coordination",
    desc: "Proactive communication, shipment monitoring, and logistics coordination provide visibility throughout the transportation process from origin to destination.",
  },
];

/* ================= HIGHLIGHTS ================= */
const highlights = [
  "Full Container Load (FCL) shipping",
  "Less Than Container Load (LCL) solutions",
  "Special equipment cargo handling",
  "Oversized and project cargo support",
  "Global ocean carrier network",
  "Import & export logistics coordination",
];

const OceanFreight = () => {
  return (
    <SubServiceLayout>
      {/* ================= HERO ================= */}
      <SubServiceHero
        icon={<FaShip />}
        title="Ocean Freight Services"
        subtitle="Global Shipping Solutions for International Trade"
        desc="KN Logistics Solutions provides reliable ocean freight services for businesses moving cargo across international markets. From Full Container Load (FCL) and Less Than Container Load (LCL) shipments to specialized and oversized cargo, we deliver flexible shipping solutions backed by trusted global carrier networks."
        image="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2000&auto=format&fit=crop"
      />

      {/* ================= OVERVIEW ================= */}
      <SubServiceOverview
        title="Worldwide Ocean"
        highlight="Freight Solutions"
        intro="Cost-effective international shipping supported by global carrier partnerships and experienced logistics coordination."
        description={`Ocean freight remains one of the most important transportation methods for international trade, providing businesses with efficient and economical access to global markets. KN Logistics Solutions supports importers, exporters, manufacturers, distributors, and retailers with dependable ocean freight services designed to move cargo safely and efficiently across international shipping routes.

Our ocean transportation solutions include Full Container Load (FCL) services for businesses shipping larger cargo volumes and Less Than Container Load (LCL) solutions for organizations seeking cost-effective shared container options. Through strong relationships with trusted ocean carriers, we help customers access flexible shipping schedules and worldwide transportation coverage.

In addition to standard containerized freight, KN Logistics Solutions supports special equipment shipments, oversized cargo, and project freight that require specialized planning and coordination. Our team works closely with customers to identify the most suitable transportation solution based on cargo specifications, destination requirements, and delivery timelines.

From shipment planning and carrier coordination to visibility and operational support, we help businesses simplify international shipping while maintaining confidence throughout the transportation process.`}
        points={highlights}
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop"
      />

      {/* ================= FEATURES ================= */}
      <SubServiceFeatures
        title="Comprehensive Ocean Freight Services"
        subtitle="Flexible international shipping solutions for containerized cargo, project freight, oversized shipments, and global supply chain operations."
        features={features}
      />

      {/* ================= CTA ================= */}
      <SubServiceCTA
        title="Need Reliable International Shipping?"
        desc="Partner with KN Logistics Solutions for FCL, LCL, special equipment, and oversized cargo transportation supported by experienced ocean freight professionals and global carrier networks."
        button="Request Ocean Freight Support"
      />
    </SubServiceLayout>
  );
};

export default OceanFreight;