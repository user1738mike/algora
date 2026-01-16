"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import Footer from "@/components/Footer/Footer";
import ShuffleText from "@/components/ShuffleText/ShuffleText";

import "./archive.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ArchivePage = () => {
  const container = useRef();

  // Product data for advertisers
  const products = [
    {
      id: "BAG-001",
      image: "/images/carousel/bag1.png",
      name: "Classic Tote",
      specs: "Size: 15x12x5 inches | Material: Recycled Canvas",
    },
    {
      id: "BAG-002",
      image: "/images/carousel/bag2.png",
      name: "Premium Shopper",
      specs: "Size: 18x14x6 inches | Material: Upcycled Denim",
    },
    {
      id: "BAG-003",
      image: "/images/carousel/bag3.png",
      name: "Urban Carry",
      specs: "Size: 16x13x5 inches | Material: Recycled Polyester",
    },
    {
      id: "BAG-004",
      image: "/images/carousel/rebagonwall.png",
      name: "Eco Messenger",
      specs: "Size: 14x11x4 inches | Material: Denim Blend",
    },
    {
      id: "BAG-005",
      image: "/images/carousel/bag4.png",
      name: "Artisan Satchel",
      specs: "Size: 13x10x6 inches | Material: Recycled Leather",
    },
    {
      id: "BAG-006",
      image: "/images/carousel/bag5.png",
      name: "Market Basket",
      specs: "Size: 17x15x7 inches | Material: Woven Recycled Fabric",
    },
    {
      id: "BAG-007",
      image: "/images/carousel/bag6.png",
      name: "Compact Pouch",
      specs: "Size: 12x9x3 inches | Material: Upcycled Cotton",
    },
    {
      id: "BAG-008",
      image: "/images/carousel/bag7.png",
      name: "Weekend Duffel",
      specs: "Size: 20x12x8 inches | Material: Recycled Canvas",
    },
    {
      id: "BAG-009",
      image: "/images/carousel/bag8.png",
      name: "Daily Commuter",
      specs: "Size: 15x11x5 inches | Material: Eco-Friendly Nylon",
    },
    {
      id: "BAG-010",
      image: "/images/carousel/han.jpeg",
      name: "Boutique Bag",
      specs: "Size: 14x12x4 inches | Material: Premium Recycled Textiles",
    },
    {
      id: "BAG-011",
      image: "/images/carousel/handmade.jfif",
      name: "Express Tote",
      specs: "Size: 16x14x6 inches | Material: Biodegradable Blend",
    },
    {
      id: "BAG-012",
      image: "/images/home/redbag.jpg",
      name: "Signature Collection",
      specs: "Size: 18x15x7 inches | Material: Artisan Recycled Mix",
    },
  ];

  return (
    <ReactLenis root>
      <div className="archive" ref={container}>
        <section className="archive-hero">
          <div className="container">
            <ShuffleText
              as="h1"
              text="Advertising Opportunities: Premium Placement on Sustainable Bags"
            />
            <div className="advertiser-intro">
              <p className="primary">
                [ Brand Visibility Meets Sustainability ]
              </p>
              <h3>Choose Your Canvas for Impact Marketing</h3>
              <p className="description">
                Partner with Rebag to showcase your brand on eco-friendly
                shopping bags that reach conscious consumers daily. Each bag
                offers premium advertising space while supporting sustainable
                practices and artisan communities. Select from our collection
                below and reference the unique ID when inquiring about placement
                opportunities.
              </p>
            </div>
          </div>
        </section>

        <section className="products-gallery">
          <div className="container">
            <div className="products-grid">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img
                      src={product.image}
                      alt={`${product.name} - Available for advertising placement`}
                    />
                  </div>
                  <div className="product-info">
                    <p className="product-id">{product.id}</p>
                    <h4 className="product-name">{product.name}</h4>
                    <p className="product-specs">{product.specs}</p>
                    <div className="product-tags">
                      <span className="tag">Available for Advertising</span>
                      <span className="tag">Prime Visibility</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cta-section">
              <p className="primary">[ Ready to Make an Impact? ]</p>
              <h2>Let's Create Something Sustainable Together</h2>
              <p className="cta-description">
                Reference the bag ID(s) you're interested in and reach out to
                our partnerships team. We'll work with you to create compelling
                brand placements that resonate with environmentally conscious
                consumers while supporting our mission of sustainability and
                fair trade.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default ArchivePage;
