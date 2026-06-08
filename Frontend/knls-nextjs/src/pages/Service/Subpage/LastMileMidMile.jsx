import React from "react";
import { FaShippingFast } from "react-icons/fa";

/* TEMPLATE IMPORTS */
import SubServiceLayout from "@/components/SubServiceLayout";
import SubServiceHero from "@/components/SubServiceHero";
import SubServiceOverview from "@/components/SubServiceOverview";
import SubServiceFeatures from "@/components/SubServiceFeatures";
import SubServiceCTA from "@/components/SubServiceCTA";

/* FEATURES */
const features = [
  {
    icon: "🏠",
    title: "Last-Mile Delivery Solutions",
    desc: "Reliable last-mile transportation services designed to ensure products reach residential customers safely, efficiently, and on time. We support customer-facing deliveries that help businesses strengthen service quality and brand reputation.",
  },
  {
    icon: "🏢",
    title: "Mid-Mile Transportation",
    desc: "Efficient B2B transportation connecting warehouses, fulfillment centers, retail locations, and distribution hubs. Our mid-mile solutions help businesses maintain inventory flow and improve overall supply chain performance.",
  },
  {
    icon: "🔧",
    title: "Installation & Assembly Support",
    desc: "For deliveries requiring more than transportation, we support installation, assembly, setup coordination, and value-added delivery services that enhance the end-customer experience.",
  },
  {
    icon: "📦",
    title: "Retail & E-Commerce Fulfillment",
    desc: "Flexible transportation support for retailers, e-commerce businesses, and distribution networks that require dependable delivery execution and customer-focused logistics solutions.",
  },
  {
    icon: "📍",
    title: "Real-Time Delivery Visibility",
    desc: "Shipment visibility, communication updates, and operational coordination help businesses stay informed throughout the delivery process and improve customer satisfaction.",
  },
  {
    icon: "🤝",
    title: "Customer Experience Focus",
    desc: "Our delivery solutions are designed around professionalism, reliability, and service quality, helping businesses create positive delivery experiences for both commercial and residential customers.",
  },
];

/* HIGHLIGHTS */
const highlights = [
  "Residential B2C last-mile delivery",
  "Business-to-business mid-mile transportation",
  "Installation and assembly support",
  "Retail and e-commerce fulfillment",
  "Real-time delivery visibility",
  "Customer-focused logistics execution",
];

const LastMileMidMile = () => {
  return (
    <SubServiceLayout>
      {/* ================= HERO ================= */}
      <SubServiceHero
        icon={<FaShippingFast />}
        title="Last-Mile & Mid-Mile Delivery Services"
        subtitle="Customer-Focused Transportation for Businesses & End Customers"
        desc="KN Logistics Solutions provides dependable last-mile and mid-mile transportation services that connect distribution centers, businesses, retailers, and end customers. From residential deliveries and business-to-business freight movement to installation and assembly support, we help create seamless delivery experiences backed by reliable logistics execution."
        image="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2000&auto=format&fit=crop"
      />

      {/* ================= OVERVIEW ================= */}
      <SubServiceOverview
        title="Reliable Last-Mile &"
        highlight="Mid-Mile Transportation"
        intro="Connecting businesses, distribution networks, and customers through dependable delivery solutions."
        description={`Today's supply chains depend on efficient transportation beyond traditional freight movement. Businesses need reliable delivery partners that can connect warehouses, distribution centers, retail locations, and end customers while maintaining service quality throughout the process.

KN Logistics Solutions provides last-mile and mid-mile transportation services designed to support both business-to-consumer (B2C) and business-to-business (B2B) logistics requirements. Our services help businesses improve delivery performance, strengthen customer satisfaction, and maintain operational efficiency across their distribution networks.

For residential and customer-facing deliveries, our last-mile services focus on dependable execution, timely delivery, and professional customer interactions. For businesses moving products between facilities, warehouses, and retail locations, our mid-mile transportation solutions provide the connectivity needed to keep supply chains moving efficiently.

In addition to transportation, we support installation, assembly, and value-added delivery services for shipments requiring extra attention. Through communication, visibility, and reliable execution, KN Logistics Solutions helps businesses deliver products with confidence while creating positive experiences for customers and partners alike.`}
        points={highlights}
        image="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&auto=format&fit=crop"
      />

      {/* ================= FEATURES ================= */}
      <SubServiceFeatures
        title="Last-Mile & Mid-Mile Delivery Solutions"
        subtitle="Comprehensive transportation services designed to improve delivery performance, strengthen customer satisfaction, and support efficient supply chain operations."
        features={features}
      />

      {/* ================= CTA ================= */}
      <SubServiceCTA
        title="Need Reliable Delivery Support?"
        desc="Partner with KN Logistics Solutions for last-mile delivery, mid-mile transportation, installation support, and customer-focused logistics services tailored to your operational requirements."
        button="Request Delivery Solutions"
      />
    </SubServiceLayout>
  );
};

export default LastMileMidMile;