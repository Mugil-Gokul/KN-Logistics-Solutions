import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "KN Logistics Solutions - Freight & Logistics Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}