import { Suspense } from "react";
import ProgressBar from "../components/ProgressBar/ProgressBar.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";

import "./globals.css";

export const metadata = {
  title: "ReBag — Carrying Change",
  description:
    "Rebag is a sustainable Kenyan brand that creates stylish, functional bags from upcycled textiles, Ankara prints, patchwork fabrics, denim, and reclaimed materials. Focused on sustainability and ethical craftsmanship, Rebag transforms textile waste into beautiful handmade tote bags, sling bags, handbags, shoppers, backpacks, pouches, and custom accessories. Every Rebag piece combines eco-conscious design, African-inspired creativity, and everyday practicality, offering unique products that support sustainable living and responsible fashion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <ProgressBar />
        </Suspense>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
