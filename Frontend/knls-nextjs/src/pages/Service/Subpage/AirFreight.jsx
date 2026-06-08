import { FaPlane } from "react-icons/fa";

import SubServiceLayout from "@/components/SubServiceLayout";
import SubServiceHero from "@/components/SubServiceHero";
import SubServiceOverview from "@/components/SubServiceOverview";
import SubServiceFeatures from "@/components/SubServiceFeatures";
import SubServiceCTA from "@/components/SubServiceCTA";

/* ================= FEATURES ================= */
const features = [
  {
    icon: "✈️",
    title: "Domestic & International Air Freight",
    desc: "KN Logistics Solutions provides reliable air freight services for both domestic and international shipments. Through a trusted network of airline and cargo partners, we help businesses move freight efficiently across major markets and global trade lanes.",
  },
  {
    icon: "⚡",
    title: "Time-Critical & Expedited Shipments",
    desc: "For urgent freight that requires accelerated transit times, our air freight solutions support time-sensitive deliveries, helping businesses reduce delays and meet critical shipping deadlines.",
  },
  {
    icon: "🌎",
    title: "Global Airline Network",
    desc: "Our extensive logistics network provides access to major international airports and cargo routes, creating flexible transportation options for a wide range of industries and shipment types.",
  },
  {
    icon: "📍",
    title: "Shipment Visibility & Coordination",
    desc: "Real-time communication, shipment monitoring, and proactive logistics coordination help customers stay informed throughout the transportation process.",
  },
  {
    icon: "📦",
    title: "Commercial & Industrial Cargo",
    desc: "We support the transportation of commercial products, industrial freight, manufacturing components, retail inventory, and other cargo requiring dependable air transportation solutions.",
  },
  {
    icon: "🛡️",
    title: "Reliable Delivery Performance",
    desc: "Our air freight services are focused on accuracy, operational efficiency, and dependable delivery execution to help businesses maintain supply chain continuity.",
  },
];

/* ================= HIGHLIGHTS ================= */
const highlights = [
  "Domestic air freight services",
  "International cargo transportation",
  "Time-sensitive & expedited shipping",
  "Global airline network access",
  "Shipment visibility & coordination",
  "Reliable on-time delivery performance",
];

export default function AirFreight() {
  return (
    <SubServiceLayout>
      {/* ================= HERO ================= */}
      <SubServiceHero
        icon={<FaPlane />}
        title="Air Freight Services"
        subtitle="Fast, Reliable & Time-Sensitive Global Transportation"
        desc="KN Logistics Solutions provides dependable air freight services for businesses that require fast, efficient, and reliable cargo movement. Through a strong global airline network and experienced logistics coordination, we help customers move domestic and international shipments with confidence."
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop"
      />

      {/* ================= OVERVIEW ================= */}
      <SubServiceOverview
        title="Fast & Dependable"
        highlight="Air Freight Solutions"
        intro="When speed matters, air freight provides one of the most effective transportation options for businesses moving time-sensitive cargo."
        description={`KN Logistics Solutions offers air freight services designed to support businesses that require reliable transit times, global reach, and dependable shipment execution. Whether moving cargo across the country or around the world, our air freight solutions help customers meet demanding schedules while maintaining visibility throughout the transportation process.

Our logistics team works closely with a trusted network of airline and cargo partners to coordinate domestic and international shipments efficiently. From commercial products and manufacturing components to urgent replenishment freight and critical inventory, we help businesses access transportation solutions that align with their operational requirements.

Air freight is often the preferred option for shipments that cannot tolerate extended transit times. For urgent cargo, production-critical freight, and high-priority deliveries, our transportation solutions help reduce delays and support supply chain continuity.

Supported by shipment visibility, communication, and operational coordination, KN Logistics Solutions helps businesses move cargo quickly, efficiently, and with confidence across domestic and international markets.`}
        points={highlights}
        image="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1600&auto=format&fit=crop"
      />

      {/* ================= FEATURES ================= */}
      <SubServiceFeatures
        title="Comprehensive Air Freight Services"
        subtitle="Flexible air transportation solutions designed to support urgent shipments, international trade, and time-sensitive supply chain requirements."
        features={features}
      />

      {/* ================= CTA ================= */}
      <SubServiceCTA
        title="Need Fast & Reliable Air Freight?"
        desc="Partner with KN Logistics Solutions for domestic and international air freight services backed by experienced logistics coordination, shipment visibility, and dependable delivery performance."
        button="Request Air Freight Support"
      />
    </SubServiceLayout>
  );
}