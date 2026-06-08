import React from "react";
import { FaWarehouse } from "react-icons/fa";

/* TEMPLATE IMPORTS */
import SubServiceLayout from "@/components/SubServiceLayout";
import SubServiceHero from "@/components/SubServiceHero";
import SubServiceOverview from "@/components/SubServiceOverview";
import SubServiceFeatures from "@/components/SubServiceFeatures";
import SubServiceCTA from "@/components/SubServiceCTA";

/* ================= FEATURES ================= */
const features = [
  {
    icon: "📦",
    title: "Cross-Docking Operations",
    desc: "Our cross-docking services help reduce storage time and accelerate freight movement by transferring cargo directly between inbound and outbound transportation. This approach improves efficiency, minimizes handling, and supports faster delivery performance across supply chains.",
  },
  {
    icon: "🏬",
    title: "Flexible Storage Solutions",
    desc: "KN Logistics Solutions provides flexible warehousing support for businesses requiring short-term, long-term, or project-based storage. Secure facilities and storage trailer options help accommodate changing inventory and transportation requirements.",
  },
  {
    icon: "🚛",
    title: "Distribution & Order Fulfillment Support",
    desc: "We support distribution operations by coordinating inventory movement, shipment preparation, freight scheduling, and transportation planning to ensure products move efficiently through the supply chain.",
  },
  {
    icon: "🏗️",
    title: "Yard Management & Shunting Services",
    desc: "Our yard management and shunting solutions help warehouses, distribution centers, and industrial facilities improve trailer flow, dock utilization, staging operations, and overall site efficiency.",
  },
  {
    icon: "📊",
    title: "Inventory Visibility & Control",
    desc: "Improved visibility across inventory and distribution operations helps businesses make informed decisions, optimize stock management, and maintain greater operational control throughout the supply chain.",
  },
  {
    icon: "🌎",
    title: "Integrated Supply Chain Support",
    desc: "By combining warehousing, distribution, transportation, and logistics coordination, we help businesses streamline operations, reduce delays, and improve overall supply chain performance.",
  },
];

/* ================= HIGHLIGHTS ================= */
const highlights = [
  "Cross-docking operations",
  "Flexible warehouse storage",
  "Distribution & fulfillment support",
  "Storage trailer availability",
  "Yard management & shunting services",
  "Inventory visibility & supply chain support",
];

const WarehousingAndDistribution = () => {
  return (
    <SubServiceLayout>
      {/* ================= HERO ================= */}
      <SubServiceHero
        icon={<FaWarehouse />}
        title="Warehousing & Distribution Services"
        subtitle="Storage, Cross-Docking & Supply Chain Support"
        desc="KN Logistics Solutions provides flexible warehousing and distribution services designed to support inventory management, cargo handling, cross-docking, storage, and freight distribution. Our solutions help businesses improve efficiency, reduce delays, and maintain greater control across their supply chain operations."
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
      />

      {/* ================= OVERVIEW ================= */}
      <SubServiceOverview
        title="Warehousing & Distribution"
        highlight="Solutions That Keep Freight Moving"
        intro="Efficient warehousing and distribution operations play a critical role in maintaining supply chain performance. Businesses need storage flexibility, reliable cargo handling, and coordinated distribution services that keep products moving efficiently from inventory to final destination."
        description={`KN Logistics Solutions provides warehousing and distribution services designed to support modern supply chain requirements. Our solutions help businesses manage inventory, improve freight flow, reduce delays, and maintain greater visibility across storage and distribution operations.

From cross-docking and cargo handling to storage support and distribution coordination, our services are tailored to help customers improve operational efficiency while maintaining flexibility for changing business demands.

We also provide yard management and shunting support that helps warehouses, distribution centers, and industrial facilities optimize trailer movement, dock scheduling, and site operations. Combined with transportation services, our warehousing solutions create a seamless connection between storage, handling, and freight delivery.

Whether supporting seasonal inventory requirements, regional distribution programs, project-based storage needs, or ongoing supply chain operations, KN Logistics Solutions delivers dependable warehousing and distribution support designed around efficiency and operational performance.`}
        points={highlights}
        image="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop"
      />

      {/* ================= FEATURES ================= */}
      <SubServiceFeatures
        title="Warehousing, Distribution & Inventory Support"
        subtitle="Flexible storage solutions, efficient cargo handling, cross-docking operations, and distribution services designed to improve supply chain performance and operational visibility."
        features={features}
      />

      {/* ================= CTA ================= */}
      <SubServiceCTA
        title="Need Flexible Warehousing & Distribution Support?"
        desc="Partner with KN Logistics Solutions for warehousing, cross-docking, inventory support, yard management, and distribution services that help improve efficiency across your supply chain."
        button="Request Warehousing Support"
      />
    </SubServiceLayout>
  );
};

export default WarehousingAndDistribution;