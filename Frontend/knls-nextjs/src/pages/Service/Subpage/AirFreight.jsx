import { FaPlane } from "react-icons/fa";

import SubServiceLayout from "@/components/SubServiceLayout";
import SubServiceHero from "@/components/SubServiceHero";
import SubServiceOverview from "@/components/SubServiceOverview";
import SubServiceFeatures from "@/components/SubServiceFeatures";
import SubServiceCTA from "@/components/SubServiceCTA";

const features = [
  {
    icon: "✈️",
    title: "Global Air Network",
    desc: "Extensive air freight connectivity through trusted airline and cargo partners across major international destinations.",
  },
  {
    icon: "⚡",
    title: "Time-Critical Deliveries",
    desc: "Fast transportation solutions designed for urgent and high-priority shipments requiring accelerated transit times.",
  },
  {
    icon: "📍",
    title: "End-to-End Visibility",
    desc: "Shipment monitoring and operational coordination throughout the transportation journey.",
  },
  {
    icon: "🌍",
    title: "Domestic & International Coverage",
    desc: "Reliable air freight services supporting both domestic cargo movement and international logistics requirements.",
  },
];

const highlights = [
  "Domestic air freight",
  "International cargo",
  "Time-sensitive shipping",
  "Global airline network",
  "Reliable on-time delivery",
];

export default function AirFreight() {
  return (
    <SubServiceLayout>
      {/* HERO */}
      <SubServiceHero
        icon={<FaPlane />}
        title="Air Freight"
        subtitle="Fast & Reliable Global Delivery"
        desc="Leveraging a robust air transportation network to provide fast, accurate, and dependable freight solutions for domestic and international shipments."
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop"
      />

      {/* OVERVIEW */}
      <SubServiceOverview
        title="Speed Without"
        highlight="Compromise"
        desc="From across the country to destinations around the world, KN Logistics Solutions provides efficient air freight services backed by strong transportation partnerships and operational expertise. Our solutions are designed to ensure shipments arrive safely, accurately, and on schedule, even for time-sensitive cargo requirements."
        points={highlights}
        image="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1600&auto=format&fit=crop"
      />

      {/* FEATURES */}
      <SubServiceFeatures
        title="Why Choose Our Air Freight Services"
        subtitle="Rapid cargo movement, dependable delivery schedules, and worldwide logistics connectivity."
        features={features}
      />

      {/* CTA */}
      <SubServiceCTA
        title="Move Cargo Faster Across The Globe"
        desc="Partner with KN Logistics Solutions for dependable air freight services that keep your supply chain moving efficiently and on time."
        button="Contact Us"
      />
    </SubServiceLayout>
  );
}
