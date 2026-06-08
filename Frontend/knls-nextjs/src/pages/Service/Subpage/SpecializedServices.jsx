import React from "react";
import { FaTruckLoading } from "react-icons/fa";

/* TEMPLATE IMPORTS */
import SubServiceLayout from "@/components/SubServiceLayout";
import SubServiceHero from "@/components/SubServiceHero";
import SubServiceOverview from "@/components/SubServiceOverview";
import SubServiceFeatures from "@/components/SubServiceFeatures";
import SubServiceCTA from "@/components/SubServiceCTA";

/* ================= FEATURES ================= */
const features = [
  {
    icon: "🚚",
    title: "Final Mile Delivery & White Glove Service",
    desc: "KN Logistics Solutions supports final mile delivery services for businesses that need reliable customer-facing delivery execution. For shipments requiring additional care, our white glove service supports inside delivery, careful handling, placement coordination, and a professional end-customer experience. Ideal for retail and e-commerce deliveries, high-value products, furniture, equipment, specialty items, and business-to-consumer delivery programs.",
  },
  {
    icon: "🏗️",
    title: "Dump Truck Services for Construction Sites",
    desc: "We provide dump truck services for construction sites and project-based hauling requirements. With flexible per-hour rate options available, our dump truck services support material movement, aggregates, debris removal, site preparation projects, bulk loads, and ongoing construction operations requiring dependable transportation support.",
  },
  {
    icon: "⚡",
    title: "Expedited Shipments with Team Drivers",
    desc: "For urgent freight that cannot wait for standard transit schedules, KN Logistics Solutions supports expedited transportation with team drivers. This service helps reduce downtime, improve delivery speed, and support critical freight requirements including production-sensitive shipments, urgent replenishment, high-priority deliveries, and long-distance expedited transportation.",
  },
  {
    icon: "🚛",
    title: "Shunting Services",
    desc: "Our shunting services help warehouses, distribution centers, manufacturers, and logistics facilities improve operational efficiency through organized trailer movement. We support trailer staging, dock transfers, yard management, cross-dock operations, and facility transportation requirements that improve workflow and productivity.",
  },
  {
    icon: "📦",
    title: "Transloading Services (Ontario, BC & Nova Scotia)",
    desc: "KN Logistics Solutions supports transloading services across Ontario, British Columbia, and Nova Scotia. We help businesses transfer cargo between containers, trailers, warehouses, and transportation networks to improve supply chain flexibility, support regional distribution programs, and optimize freight movement across multiple transportation modes.",
  },
  {
    icon: "🚢",
    title: "Drayage Services",
    desc: "Our drayage services support the movement of containerized freight between ports, rail terminals, warehouses, distribution centers, and customer facilities. We help importers, exporters, and logistics providers manage short-distance container transportation efficiently as part of broader intermodal and supply chain operations.",
  },
];

/* ================= HIGHLIGHTS ================= */
const highlights = [
  "Final mile and white glove delivery",
  "Dump truck services with per-hour rate options",
  "Expedited team-driver shipments",
  "Shunting for warehouses and yards",
  "Transloading in Ontario, British Columbia & Nova Scotia",
  "Drayage services for container movement",
];

const SpecializedServices = () => {
  return (
    <SubServiceLayout>
      {/* ================= HERO ================= */}
      <SubServiceHero
        icon={<FaTruckLoading />}
        title="Specialized Logistics Services"
        subtitle="Flexible Freight Support for Complex Delivery, Site & Supply Chain Needs"
        desc="KN Logistics Solutions provides specialized logistics services for businesses that need more than standard freight transportation. From final mile delivery and white glove service to dump truck support, expedited team-driver shipments, shunting, transloading, and drayage, we help customers solve complex supply chain challenges with flexible transportation support."
        image="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop"
      />

      {/* ================= OVERVIEW ================= */}
      <SubServiceOverview
        title="Flexible Specialized"
        highlight="Logistics Solutions"
        intro="Every shipment does not fit into a standard logistics model. Some freight requires site-specific service, specialized handling, faster transit, facility support, or container movement solutions that go beyond traditional transportation."
        description={`KN Logistics Solutions provides specialized transportation and logistics services designed to support construction sites, warehouses, distribution centers, importers, exporters, retailers, and businesses with time-sensitive freight requirements.

Our specialized solutions help customers manage operational challenges through services that support customer-facing delivery programs, construction projects, facility operations, intermodal freight movement, and expedited transportation requirements.

Our service portfolio includes final mile delivery, white glove transportation, dump truck services, expedited team-driver shipments, shunting operations, transloading support across major Canadian regions, and drayage services for containerized freight.

Whether your organization requires premium delivery experiences, yard management support, project-based hauling, supply chain flexibility, or urgent freight movement, KN Logistics Solutions delivers dependable logistics solutions tailored to your operational needs.`}
        points={highlights}
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop"
      />

      {/* ================= FEATURES ================= */}
      <SubServiceFeatures
        title="Specialized Logistics & Transportation Services"
        subtitle="Supporting complex delivery requirements, facility operations, construction projects, intermodal freight movement, and time-sensitive transportation needs through flexible logistics solutions."
        features={features}
      />

      {/* ================= CTA ================= */}
      <SubServiceCTA
        title="Need Specialized Logistics Support?"
        desc="Partner with KN Logistics Solutions for final mile delivery, white glove transportation, dump truck services, expedited freight, shunting, transloading, and drayage solutions tailored to your operational requirements."
        button="Request Specialized Logistics Support"
      />
    </SubServiceLayout>
  );
};

export default SpecializedServices;